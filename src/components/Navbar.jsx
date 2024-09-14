import { useState } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavMenu = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((item, index) => (
        <li key={index}>
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

  // correctly toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="max-w-screen-2xl container mx-auto py-6 px-4 flex justify-between items-center">
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
