import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { Card } from "./Card/Card";
import { ProductsFilter } from "./ProductsFilter/ProductsFilter";
import { CardProvider, useCard } from "./Context/CardContext/CardContext";
import {
  WishListProvider,
  useWishList,
} from "./Context/WishListContext/WishListContext";
import { WishListCard } from "./Card/WishListCard";
import { CartPageCard } from "./Card/HorizontalCard";
import { CartProvider, useCart } from "./Context/CartContext/CartContext";
import { PriceCard } from "./Card/PriceCard";
import { AuthProvider, useAuth } from "./Context/AuthContext/AuthContext";
import { OrderDetailsCard } from "./Card/OrderDetailsCard";
import { OrdersCard } from "./Card/OrdersCard";
import { usePrice, PriceProvider } from "./Context/PriceContext/PriceContext";

export {
  Navbar,
  Footer,
  CardProvider,
  ProductsFilter,
  Card,
  useCard,
  WishListProvider,
  useWishList,
  WishListCard,
  CartPageCard,
  CartProvider,
  useCart,
  PriceCard,
  AuthProvider,
  useAuth,
  OrderDetailsCard,
  OrdersCard,
  usePrice,
  PriceProvider,
};
