import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/**    REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}
/** HomePage**/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** ProductPage**/
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}
/** OrdersPage**/
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
