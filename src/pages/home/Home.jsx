import { Products } from "../shop/Products";
import { ChooseUs } from "./ChooseUs";
import { Experiences } from "./Experiences";
import { Hero } from "./Hero";
import { Materials } from "./Materials";
import { Testimonials } from "./Testimonials";

export const Home = () => {
  return (
    <>
      <Hero />
      <ChooseUs />
      <Products headline="Best Selling Product" />
      <Experiences />
      <Materials />
      <Testimonials />
    </>
  );
};
