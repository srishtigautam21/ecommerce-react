import { v4 as uuid } from "uuid";
import { Images } from "../../Assets/Images/image";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),

    name: "Rolled Oats | Gluten free | Lab Tested",
    price: 225,
    image: Images.oats,
    categoryName: "Healthy grains",
    ratings: 4,
    newItem: true,
    isOutOfStock: false,
    qty: 1,
  },
  {
    _id: uuid(),

    name: "Organic Cashew nuts (Kaju)",
    price: 400,
    image: Images.cashews,
    categoryName: "Nutritional Nuts",
    ratings: 4,
    isOutOfStock: false,
    qty: 1,
  },
  {
    _id: uuid(),

    name: "Organic Quinoa | (500g) | (Salvia hispanica)",
    price: 280,
    image: Images.quinoa,
    discount: true,
    priceBeforeDiscount: 400,
    discPerc: 30,
    categoryName: "Healthy grains",
    ratings: 3,
    sale: true,
    isOutOfStock: false,
    qty: 1,
  },
  {
    _id: uuid(),
    name: "Fresh | Organic Apples",
    price: 300,
    image: Images.apple,
    categoryName: "Fruits",
    ratings: 4,
    newItem: true,
    isOutOfStock: false,
    qty: 1,
  },
  {
    _id: uuid(),

    name: "Organic Chia Seeds",
    price: 250,
    image: Images.chiaSeeds,
    categoryName: "Super Seeds",
    ratings: 3,
    isOutOfStock: true,
    qty: 1,
  },
  {
    _id: uuid(),

    name: "Mixed Nuts | (500g)",
    price: 750,
    image: Images.mixedNuts,
    discount: true,
    priceBeforeDiscount: 600,
    discPerc: 20,
    categoryName: "Nutritional Nuts",
    ratings: 4,
    sale: true,
    isOutOfStock: false,
    qty: 1,
  },
];
