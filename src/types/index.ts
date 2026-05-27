// Shared type definitions for the app

export interface Category {
  id: string;
  icon: string;
  label: string;
}

export interface Service {
  id: string;
  image: string;
  title: string;
  price: string;
  rating?: number;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface LargeServiceCard {
  image: string;
  title: string;
  originalPrice: string;
  discountedPrice: string;
  badge?: string;
}

export interface User {
  id: string;
  name: string;
  location: string;
  image?: string;
}
