import contactBgImg from "../../assets/contact-background.jpg";
import { Service } from "../home/Service";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext";

export const Contact = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <section>
      {/* banner */}
      <div
        className="w-full h-[400px]  bg-no-repeat bg-cover bg-center   flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${contactBgImg})` }}
      >
        <div className="">
          <h1 className="text-5xl font-bold">Contact</h1>
        </div>
      </div>
      <Service />

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
