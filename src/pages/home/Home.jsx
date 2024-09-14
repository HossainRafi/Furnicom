import { Products } from "../shop/Products";
import { ChooseUs } from "./ChooseUs";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <ChooseUs />
      <Products headline="Best Selling Product" />
    </>
  );
};
