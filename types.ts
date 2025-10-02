
export interface MenuSize {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  sizes?: MenuSize[];
  price?: number;
}

export interface CartItem extends MenuItem {
  cartItemId: string;
  quantity: number;
  selectedSize?: MenuSize;
}
