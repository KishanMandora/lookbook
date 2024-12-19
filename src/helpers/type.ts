export type CreatorType = 'INFLUENCER' | 'CELEBRITY' | 'USER';
export type MediaType = 'IMAGE' | 'VIDEO';

export interface Creator {
  id: string;
  name: string;
  isVerified: boolean;
  avatarUrl: string;
  type: CreatorType;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  thumbnailUrl: string;
  category: string;
  url: string;
}

export interface Look {
  id: string;
  type: MediaType;
  url: string;
  products: Product[];
}

export interface LookPost {
  id: string;
  creator: Creator;
  looks: Look[];
}