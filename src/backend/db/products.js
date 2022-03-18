import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    id: 1,
    name: "Rolled Oats | Gluten free | Lab Tested",
    // price: "5000",
    price: 225,
    categoryName: "Healthy grains",
  },
  {
    _id: uuid(),
    id: 2,
    name: "Organic Cashew nuts (Kaju)",
    price: 400,
    categoryName: "Nutritional Nuts",
  },
  {
    _id: uuid(),
    id: 3,
    name: "Organic Quinoa | (500g) | (Salvia hispanica)",
    price: 280,
    discount: true,
    priceBeforeDiscount: 400,
    discPerc: 30,
    categoryName: "Healthy grains",
  },
  {
    _id: uuid(),
    id: 4,
    name: "Fresh | Organic Apples",
    price: 300,
    categoryName: "Fruits",
  },
  {
    _id: uuid(),
    id: 5,
    name: "Organic Chia Seeds",
    price: 250,
    categoryName: "Super Seeds",
  },
  {
    _id: uuid(),
    id: 6,
    name: "Mixed Nuts | (500g)",
    price: 750,
    discount: true,
    priceBeforeDiscount: 600,
    discPerc: 20,
    categoryName: "Nutritional Nuts",
  },
];
