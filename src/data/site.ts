import type { Market, MarketCode } from '../types/commerce';

// Placeholder identity. Replace these values in one place before launch.
export const site = {
  name: 'Northstar Goods',
  domain: 'example.com',
  url: 'https://example.com',
  email: 'hello@example.com',
  description:
    'A curated online store for practical everyday goods. Browse products by category, compare options and check out securely.',
  commerceMode: (import.meta.env.PUBLIC_COMMERCE_MODE === 'live' ? 'live' : 'mock') as 'mock' | 'live',
} as const;

export const markets: Market[] = [
  { code: 'US', name: 'United States', currency: 'USD', locale: 'en-US' },
  { code: 'NP', name: 'Nepal', currency: 'NPR', locale: 'en-NP' },
  { code: 'IN', name: 'India', currency: 'INR', locale: 'en-IN' },
  { code: 'BD', name: 'Bangladesh', currency: 'BDT', locale: 'en-BD' },
  { code: 'PK', name: 'Pakistan', currency: 'PKR', locale: 'en-PK' },
];

export const defaultMarket: MarketCode = 'US';

export function getMarket(code: string | null | undefined): Market {
  return markets.find((market) => market.code === code) ?? markets[0];
}
