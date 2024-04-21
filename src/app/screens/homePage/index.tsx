import React, { useEffect } from "react";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import ActiveUsers from "./ActiveUsers";
import PopularDishes from "./PopularDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { log } from "console";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  //Selector: Store=> Data
  useEffect(() => {
    //Backend server data request=> DATA
    const result = [
      {
        _id: "6624a316ec25574a54fbc394",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Steak",
        productPrice: 15,
        productLeftCount: 1,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "This is Steak",
        productImages: [
          "uploads/products/24faf2b5-e9e9-4573-b1e5-66ac77db6a81.jpg",
        ],
        productViews: 0,
        createdAt: "2024-04-21T05:24:38.131Z",
        updatedAt: "2024-04-21T05:50:31.022Z",
        __v: 0,
      },
      {
        _id: "6624a340ec25574a54fbc397",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Kebab",
        productPrice: 12,
        productLeftCount: 10,
        productSize: "LARGE",
        productVolume: 1,
        productDesc: "Kebab",
        productImages: [
          "uploads/products/81f02bc3-e3c9-4be0-8841-452bc4d63b6e.jpg",
        ],
        productViews: 0,
        createdAt: "2024-04-21T05:25:20.899Z",
        updatedAt: "2024-04-21T05:50:32.608Z",
        __v: 0,
      },
    ];
    //Slice: Data => Store
    // @ts-ignore
    setPopularDishes(result);
  }, []);
  console.log("popularDishes", popularDishes);
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
