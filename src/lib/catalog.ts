import { categories, products } from '../data/mock/catalog';
import type { Category, Product, ProductVariant } from '../types/commerce';

export type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'title-asc' | 'newest';

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProduct(handle: string): Product | undefined {
  return products.find((product) => product.handle === handle);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((product) => product.category === slug);
}

export function getFeaturedProducts(limit = 8): Product[] {
  const featured = products.filter((product) => product.featured);
  return (featured.length ? featured : products).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter(
    (item) => item.category === product.category && item.handle !== product.handle,
  );
  const others = products.filter(
    (item) => item.category !== product.category && item.handle !== product.handle,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getVariant(product: Product, variantId: string): ProductVariant | undefined {
  return product.variants.find((variant) => variant.id === variantId);
}

export function minPrice(product: Product): number {
  return Math.min(...product.variants.map((variant) => variant.price));
}

export function maxPrice(product: Product): number {
  return Math.max(...product.variants.map((variant) => variant.price));
}

export function isAvailable(product: Product): boolean {
  return product.available && product.variants.some((variant) => variant.available);
}

export function searchProducts(query: string): Product[] {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  const words = term.split(/\s+/);
  return products.filter((product) => {
    const haystack = [
      product.title,
      product.shortDescription,
      product.description,
      product.category,
      ...product.tags,
    ]
      .join(' ')
      .toLowerCase();
    return words.every((word) => haystack.includes(word));
  });
}

export function sortProducts(list: Product[], sort: SortKey): Product[] {
  const result = [...list];
  switch (sort) {
    case 'price-asc':
      return result.sort((a, b) => minPrice(a) - minPrice(b));
    case 'price-desc':
      return result.sort((a, b) => maxPrice(b) - maxPrice(a));
    case 'title-asc':
      return result.sort((a, b) => a.title.localeCompare(b.title));
    case 'newest':
      return result.reverse();
    case 'featured':
    default:
      return result.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
}
