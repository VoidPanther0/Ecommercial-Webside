import type { Category, Product } from '../../types/commerce';

export const categories: Category[] = [
  {
    slug: 'home-living',
    name: 'Home & Living',
    description: 'Simple pieces that make a room feel considered.',
    image: '/images/categories/home-living.svg',
  },
  {
    slug: 'tech-accessories',
    name: 'Tech Accessories',
    description: 'Small accessories that keep the everyday tidy.',
    image: '/images/categories/tech-accessories.svg',
  },
  {
    slug: 'kitchen-dining',
    name: 'Kitchen & Dining',
    description: 'Practical tools for the kitchen counter and table.',
    image: '/images/categories/kitchen-dining.svg',
  },
  {
    slug: 'outdoor-recreation',
    name: 'Outdoor & Recreation',
    description: 'Gear for walks, camps and weekends outside.',
    image: '/images/categories/outdoor-recreation.svg',
  },
  {
    slug: 'travel-gear',
    name: 'Travel Gear',
    description: 'Organisers and comforts for life on the move.',
    image: '/images/categories/travel-gear.svg',
  },
  {
    slug: 'wellness',
    name: 'Wellness',
    description: 'Everyday items for movement and recovery.',
    image: '/images/categories/wellness.svg',
  },
];

const image = (slug: string, alt: string) => ({ src: `/images/products/${slug}.svg`, alt });

export const products: Product[] = [
  {
    id: 'demo-001',
    handle: 'linen-throw-blanket',
    title: 'Linen Throw Blanket',
    shortDescription: 'A soft, breathable throw for the sofa or bed.',
    description:
      'A woven throw with a relaxed texture and a neutral palette. Use it as an extra layer on a bed, a picnic blanket or a lightweight cover on the couch. The demo variants below show how size and colour options appear on a product page.',
    category: 'home-living',
    tags: ['blanket', 'linen', 'demo'],
    images: [image('linen-throw-blanket-1', 'Linen throw blanket in sand colour, demo placeholder image'), image('linen-throw-blanket-2', 'Folded linen throw blanket, demo placeholder image')],
    variants: [
      { id: 'demo-001-sand', title: 'Sand', options: { Colour: 'Sand' }, available: true, price: 58, compareAtPrice: 72 },
      { id: 'demo-001-charcoal', title: 'Charcoal', options: { Colour: 'Charcoal' }, available: false, price: 58 },
    ],
    available: true,
    featured: true,
  },
  {
    id: 'demo-002',
    handle: 'ceramic-table-lamp',
    title: 'Ceramic Table Lamp',
    shortDescription: 'A simple lamp shape for a bedside table or desk.',
    description:
      'A ceramic base with a clean silhouette designed for a bedside table, desk or hallway console. This is demo catalog data used to exercise product galleries, variant selection and cart behaviour; no real inventory is represented.',
    category: 'home-living',
    tags: ['lamp', 'ceramic', 'demo'],
    images: [image('ceramic-table-lamp-1', 'Ceramic table lamp in white, demo placeholder image'), image('ceramic-table-lamp-2', 'Ceramic table lamp on a side table, demo placeholder image')],
    variants: [
      { id: 'demo-002-white', title: 'White', options: { Colour: 'White' }, available: true, price: 84 },
      { id: 'demo-002-black', title: 'Black', options: { Colour: 'Black' }, available: true, price: 84 },
    ],
    available: true,
    featured: false,
  },
  {
    id: 'demo-003',
    handle: 'magnetic-cable-organizer',
    title: 'Magnetic Cable Organizer',
    shortDescription: 'Keep charging cables within reach and off the desk.',
    description:
      'A small holder that keeps a charging cable close to the edge of a desk or nightstand. A useful example of a low-cost accessory for testing category filtering, sorting and product search.',
    category: 'tech-accessories',
    tags: ['cable', 'desk', 'demo'],
    images: [image('magnetic-cable-organizer-1', 'Cable organiser in grey, demo placeholder image')],
    variants: [
      { id: 'demo-003-grey', title: 'Grey', options: { Colour: 'Grey' }, available: true, price: 19 },
      { id: 'demo-003-blue', title: 'Blue', options: { Colour: 'Blue' }, available: true, price: 19 },
    ],
    available: true,
    featured: true,
  },
  {
    id: 'demo-004',
    handle: 'foldable-phone-stand',
    title: 'Foldable Phone Stand',
    shortDescription: 'A compact stand for video calls and hands-free viewing.',
    description:
      'A folding stand that holds a phone upright on a desk or kitchen counter. The demo variants demonstrate multi-option selection before the product is added to the cart.',
    category: 'tech-accessories',
    tags: ['phone', 'stand', 'demo'],
    images: [image('foldable-phone-stand-1', 'Foldable phone stand in black, demo placeholder image')],
    variants: [
      { id: 'demo-004-black', title: 'Black', options: { Colour: 'Black' }, available: true, price: 22 },
      { id: 'demo-004-silver', title: 'Silver', options: { Colour: 'Silver' }, available: true, price: 22 },
    ],
    available: true,
    featured: false,
  },
  {
    id: 'demo-005',
    handle: 'stainless-steel-bottle-opener',
    title: 'Stainless Steel Bottle Opener',
    shortDescription: 'A flat, pocket-sized opener for everyday use.',
    description:
      'A slim stainless steel opener that fits in a drawer or pocket. Included in the demo catalog to test price comparison, availability states and related-product links.',
    category: 'kitchen-dining',
    tags: ['opener', 'steel', 'demo'],
    images: [image('stainless-steel-bottle-opener-1', 'Stainless steel bottle opener, demo placeholder image')],
    variants: [
      { id: 'demo-005-brushed', title: 'Brushed', options: { Finish: 'Brushed' }, available: true, price: 14 },
      { id: 'demo-005-matte', title: 'Matte', options: { Finish: 'Matte' }, available: true, price: 16 },
    ],
    available: true,
    featured: false,
  },
  {
    id: 'demo-006',
    handle: 'silicone-utensil-rest',
    title: 'Silicone Utensil Rest',
    shortDescription: 'A small rest that keeps spoons off the counter.',
    description:
      'A heat-resistant silicone rest with slots for a spoon, lid or tongs. This demo product has a single option group and is used to check add-to-cart behaviour without variant complexity.',
    category: 'kitchen-dining',
    tags: ['silicone', 'kitchen', 'demo'],
    images: [image('silicone-utensil-rest-1', 'Silicone utensil rest in grey, demo placeholder image')],
    variants: [{ id: 'demo-006-grey', title: 'Grey', options: { Colour: 'Grey' }, available: true, price: 11 }],
    available: true,
    featured: false,
  },
  {
    id: 'demo-007',
    handle: 'compact-camping-lantern',
    title: 'Compact Camping Lantern',
    shortDescription: 'A rechargeable lantern for a tent or power outage.',
    description:
      'A small lantern with multiple brightness settings. The demo data includes an out-of-stock variant so the product page can be tested against unavailable selections.',
    category: 'outdoor-recreation',
    tags: ['lantern', 'camping', 'demo'],
    images: [image('compact-camping-lantern-1', 'Compact camping lantern in olive, demo placeholder image')],
    variants: [
      { id: 'demo-007-olive', title: 'Olive', options: { Colour: 'Olive' }, available: true, price: 42 },
      { id: 'demo-007-orange', title: 'Orange', options: { Colour: 'Orange' }, available: false, price: 42 },
    ],
    available: true,
    featured: true,
  },
  {
    id: 'demo-008',
    handle: 'packable-daypack',
    title: 'Packable Daypack',
    shortDescription: 'A lightweight daypack that folds into its own pocket.',
    description:
      'A simple daypack for a day out or a carry-on extra. Product descriptions in this demo catalog are generic on purpose and do not describe a real, verified product.',
    category: 'outdoor-recreation',
    tags: ['backpack', 'travel', 'demo'],
    images: [image('packable-daypack-1', 'Packable daypack in black, demo placeholder image')],
    variants: [
      { id: 'demo-008-black', title: 'Black', options: { Colour: 'Black' }, available: true, price: 49 },
      { id: 'demo-008-navy', title: 'Navy', options: { Colour: 'Navy' }, available: true, price: 49 },
    ],
    available: true,
    featured: true,
  },
  {
    id: 'demo-009',
    handle: 'packing-cube-set',
    title: 'Packing Cube Set',
    shortDescription: 'Three cubes that keep a suitcase organised.',
    description:
      'A set of three fabric cubes for separating clothing and accessories. Included in the demo catalog to verify multi-variant pricing and size selection.',
    category: 'travel-gear',
    tags: ['packing', 'suitcase', 'demo'],
    images: [image('packing-cube-set-1', 'Set of packing cubes in grey, demo placeholder image')],
    variants: [
      { id: 'demo-009-small', title: 'Small set', options: { Size: 'Small set' }, available: true, price: 27 },
      { id: 'demo-009-large', title: 'Large set', options: { Size: 'Large set' }, available: true, price: 35 },
    ],
    available: true,
    featured: false,
  },
  {
    id: 'demo-010',
    handle: 'neck-travel-pillow',
    title: 'Neck Travel Pillow',
    shortDescription: 'A soft support pillow for long journeys.',
    description:
      'A simple neck pillow for trains, planes and car rides. This demo entry has a sale price so the price display component can be tested with and without a compare-at price.',
    category: 'travel-gear',
    tags: ['pillow', 'travel', 'demo'],
    images: [image('neck-travel-pillow-1', 'Neck travel pillow in grey, demo placeholder image')],
    variants: [
      { id: 'demo-010-grey', title: 'Grey', options: { Colour: 'Grey' }, available: true, price: 32, compareAtPrice: 39 },
      { id: 'demo-010-blue', title: 'Blue', options: { Colour: 'Blue' }, available: true, price: 32 },
    ],
    available: true,
    featured: false,
  },
  {
    id: 'demo-011',
    handle: 'resistance-band-set',
    title: 'Resistance Band Set',
    shortDescription: 'Three bands for simple strength routines at home.',
    description:
      'A set of resistance bands with different tension levels. The demo variants show how a product can have more than one option name and still share a single image gallery.',
    category: 'wellness',
    tags: ['fitness', 'bands', 'demo'],
    images: [image('resistance-band-set-1', 'Set of resistance bands, demo placeholder image')],
    variants: [
      { id: 'demo-011-light', title: 'Light', options: { Level: 'Light' }, available: true, price: 18 },
      { id: 'demo-011-medium', title: 'Medium', options: { Level: 'Medium' }, available: true, price: 18 },
      { id: 'demo-011-heavy', title: 'Heavy', options: { Level: 'Heavy' }, available: false, price: 20 },
    ],
    available: true,
    featured: true,
  },
  {
    id: 'demo-012',
    handle: 'cork-yoga-mat',
    title: 'Cork Yoga Mat',
    shortDescription: 'A firm mat for home practice.',
    description:
      'A cork-surface mat intended for yoga and stretching at home. All product data on this page is development-only demo content and is not a real offer for sale.',
    category: 'wellness',
    tags: ['yoga', 'cork', 'demo'],
    images: [image('cork-yoga-mat-1', 'Cork yoga mat in natural colour, demo placeholder image')],
    variants: [
      { id: 'demo-012-natural', title: 'Natural', options: { Colour: 'Natural' }, available: true, price: 68 },
      { id: 'demo-012-slate', title: 'Slate', options: { Colour: 'Slate' }, available: true, price: 68 },
    ],
    available: true,
    featured: false,
  },
];
