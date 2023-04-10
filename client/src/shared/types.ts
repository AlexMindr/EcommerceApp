export interface ItemType {
  id: number;
}
export interface CartItemType {
  id: ItemType;
  count: number;
}

export interface InitialCartType {
  isCartOpen: boolean;
  cart: CartItemType[];
  items: ItemType[];
}
