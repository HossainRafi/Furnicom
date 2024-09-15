import aboutBgImg from "../../assets/about-background.jpg";
import { Experiences } from "../home/Experiences";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext";

export const About = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <section>
      {/* banner */}
      <div
        className="w-full h-[400px]  bg-no-repeat bg-cover  flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutBgImg})` }}
      >
        <div className="">
          <h1 className="text-5xl font-bold">About Us</h1>
        </div>
      </div>
      <Experiences />

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
