import type { CartLine, CartState } from '../types/commerce';

export const CART_KEY = 'ng:cart:v1';
export const WISHLIST_KEY = 'ng:wishlist:v1';
export const RECENT_KEY = 'ng:recent:v1';
export const MARKET_KEY = 'ng:market:v1';
export const TOOLS_KEY = 'ng:tools:v1';

const EMPTY_CART: CartState = { lines: [], updatedAt: 0 };

function canUseStorage(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function read<T>(key: string, fallback: T): T {
  if (!canUseStorage()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable or full; the UI still works for the current page.
  }
}

export function readCart(): CartState {
  const value = read<Partial<CartState>>(CART_KEY, EMPTY_CART);
  return {
    lines: Array.isArray(value.lines) ? value.lines : [],
    updatedAt: typeof value.updatedAt === 'number' ? value.updatedAt : 0,
  };
}

export function writeCart(state: CartState): void {
  write(CART_KEY, state);
  window.dispatchEvent(new CustomEvent('cart:change', { detail: state }));
}

export function addToCart(productId: string, variantId: string, quantity: number): void {
  const state = readCart();
  const key = `${productId}::${variantId}`;
  const existing = state.lines.find((line) => line.key === key);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.lines.push({ key, productId, variantId, quantity });
  }
  writeCart({ lines: state.lines, updatedAt: Date.now() });
}

export function updateCartQuantity(key: string, quantity: number): void {
  const state = readCart();
  const line = state.lines.find((item) => item.key === key);
  if (!line) return;
  if (quantity <= 0) {
    state.lines = state.lines.filter((item) => item.key !== key);
  } else {
    line.quantity = quantity;
  }
  writeCart({ lines: state.lines, updatedAt: Date.now() });
}

export function removeCartLine(key: string): void {
  const state = readCart();
  state.lines = state.lines.filter((line) => line.key !== key);
  writeCart({ lines: state.lines, updatedAt: Date.now() });
}

export function clearCart(): void {
  writeCart({ lines: [], updatedAt: Date.now() });
}

export function cartCount(): number {
  return readCart().lines.reduce((total, line) => total + line.quantity, 0);
}

export function readIds(key: string): string[] {
  const value = read<unknown>(key, []);
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

export function toggleId(key: string, id: string): boolean {
  const ids = readIds(key);
  const index = ids.indexOf(id);
  if (index >= 0) {
    ids.splice(index, 1);
    write(key, ids);
    return false;
  }
  ids.unshift(id);
  write(key, ids.slice(0, 12));
  return true;
}

export function hasId(key: string, id: string): boolean {
  return readIds(key).includes(id);
}

export function readRecord<T>(key: string, fallback: T): T {
  return read<T>(key, fallback);
}

export function writeRecord<T>(key: string, value: T): void {
  write(key, value);
}

export function getCartLine(productId: string, variantId: string): CartLine | undefined {
  return readCart().lines.find(
    (line) => line.productId === productId && line.variantId === variantId,
  );
}
