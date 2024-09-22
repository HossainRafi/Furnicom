import { Products } from "../shop/Products";
import { ChooseUs } from "./ChooseUs";
import { Experiences } from "./Experiences";
import { Hero } from "./Hero";
import { Service } from "./Service";
import { Testimonials } from "./Testimonials";

import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext";

export const Home = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Hero />
      <ChooseUs />
      <Products headline="Best Selling Product" />
      <Experiences />
      <Service />
      <Testimonials />

      {/* theme toggler button */}
      <div className="bottom-10 md:bottom-28 right-6 md:right-20 z-40 fixed">
        <button
          onClick={toggleTheme}
          className="focus:outline-none font-bold text-lg bg-black text-white p-3 rounded-full "
        >
          {isDarkMode ? (
            <BsSunFill className="text-yellow-300 text-2xl" />
          ) : (
            <BsMoonStars className="text-2xl" />
          )}
        </button>
      </div>
    </>
  );
};
