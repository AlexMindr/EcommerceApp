export enum CategoryEnum {
  newArrivals = "newArrivals",
  bestSellers = "bestSellers",
  topRated = "topRated",
}
export interface ItemAttributes {
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  image: any;
  category: CategoryEnum;
}
export interface CartItemType {
  id: number;
  count: number;
  attributes: ItemAttributes;
}

export interface ItemType {
  id: number;
  attributes: ItemAttributes;
}

export interface InitialCartType {
  isCartOpen: boolean;
  cart: CartItemType[];
  items: ItemType[];
}
