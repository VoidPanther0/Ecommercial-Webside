export type MarketCode = 'US' | 'NP' | 'IN' | 'BD' | 'PK';

export interface Market {
  code: MarketCode;
  name: string;
  currency: string;
  locale: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  options: Record<string, string>;
  available: boolean;
  price: number;
  compareAtPrice?: number;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  tags: string[];
  images: ProductImage[];
  variants: ProductVariant[];
  available: boolean;
  featured: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface CartLine {
  key: string;
  productId: string;
  variantId: string;
  quantity: number;
}

export interface CartState {
  lines: CartLine[];
  updatedAt: number;
}
