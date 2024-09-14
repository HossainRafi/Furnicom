import { useEffect, useState } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavMenu = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to toggle mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // state for scrolling

  // correctly toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // scrolling effect functionality
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-screen-2xl container mx-auto py-4 px-12 flex justify-between items-center">
        {/* nav logo */}
        <NavLink to="/">
          <img src="../../public/logo.png" className="h-8 w-32" />
        </NavLink>

        {/* hamburger menu for mobile */}
        <div
          onClick={toggleMenu}
          className="md:hidden text-xl cursor-pointer hover:text-primary"
        >
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/* desktop menu items */}
        <div className="hidden md:flex">
          <NavMenu />
        </div>

        {/* mobile menu items */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="absolute top-7 right-4 text-xl cursor-pointer"
            onClick={toggleMenu}
          >
            <ImCross />
          </div>
          <NavMenu toggleMenu={toggleMenu} />
        </div>

        {/* cart icon */}
        <div className="hidden md:block relative cursor-pointer">
          <FaCartPlus className="text-xl" />
          <sup className="absolute -top-2 -right-1 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};
