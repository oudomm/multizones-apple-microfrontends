export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  username?: string;
  email: string;
  phoneNumber?: string;
  gender?: string;
  birthdate?: string;
  avatar?: string;
  coverImage?: string;
}