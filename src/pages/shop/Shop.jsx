import bannerImg from "../../assets/banner.png";
import { Products } from "./Products";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext";

export const Shop = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="min-h-screen">
      {/* banner */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-5xl font-bold">Shop Our Products</h1>
      </div>

      {/* product page */}
      <Products headline="What's Your Choice" />

      {/* theme toggler button */}
      <div className="bottom-28 right-20 z-40 fixed">
        <button
          onClick={toggleTheme}
          className="focus:outline-none font-bold text-lg bg-black text-white p-3 rounded-full "
        >
          {isDarkMode ? (
            <BsSunFill className="text-yellow-300 text-xl"/>
          ) : (
            <BsMoonStars className="text-xl" />
          )}
        </button>
      </div>
    </section>
  );
};
