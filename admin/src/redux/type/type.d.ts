export interface Banner {
  id: number;
  productName: string;
  productDescription: string;
  categoryId: number;
  priceNow: number;
  pricePrevious: number;
  image: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SmallBanner {
  id: string;
  image: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscriber {
  email: string;
}

export interface Contact {
  id: number;
  fullName: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Color {
  id: number;
  name: string;
}

export interface Size {
  id: number;
  name: string;
}

export interface Review {
  id: number;
  name: string;
  name: description;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  priceNow: number;
  pricePrevious: number;
  image: string;
  isActive: string;
  isBestSeller: string;
  isFeatured: string;
  isHotSale: string;
  isRecent: string;
  isOutOfStock: string;
  createdAt: Date;
}
