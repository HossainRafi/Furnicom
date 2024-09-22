import { FaSearch } from "react-icons/fa";
import bannerImg from "../../assets/banner.png";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext";

export const Hero = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <section
      className={`relative h-screen bg-cover bg-center text-white`}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="relative md:pt-44 pt-28 px-4 text-center md:w-1/2 mx-auto space-y-8">
        {/* banner heading */}
        <h1 className="text-4xl lg:text-5xl lg:leading-tight leading-snug font-medium">
          Modernize Your Life with Minimalistic Phones
        </h1>
        <p className="text-xl lg:w-1/2 mx-auto ">
          Discover sleek & minimalist mobile phones designed to enhance your
          lifestyle with cutting-edge technology
        </p>

        {/* search field with input and icon */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search Phones..."
            className="w-full md:w-80 px-6 py-2  bg-black/50 rounded-full border border-gray-300 text-white focus:outline-none"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer">
            <FaSearch className="text-white " />
          </div>
        </div>
      </div>

      {/* overlay with bottom blur effect */}
      <div className="absolute inset-x-0 -mb-2 bottom-0 h-2/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm" />

      {/* theme toggler button */}
      <div className="bottom-28 right-20 z-40 fixed">
        <button
          onClick={toggleTheme}
          className="focus:outline-none font-bold text-lg bg-black text-white p-3 rounded-full "
        >
          {isDarkMode ? (
            <BsSunFill className="text-yellow-300 text-xl" />
          ) : (
            <BsMoonStars className="text-xl" />
          )}
        </button>
      </div>
    </section>
  );
};
