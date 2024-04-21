import { Member } from "./member";
import { Product } from "./product";

/**    REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
}
/** HomePage**/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** ProductPage**/

/** OrdersPage**/
