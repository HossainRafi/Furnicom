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
          <NavLink to={item.path}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  return (
    <header>
      <nav className="max-w-screen-2xl container mx-auto py-6 px-4 flex justify-between items-center">
        {/* nav logo */}
        <NavLink to="/" >
          <img src="../../public/logo.png" className="h-10 w-36" />
        </NavLink>

        {/* desktop menu items */}
        <div>
          <NavMenu />
        </div>

        {/* cart icon */}
        <div>cart</div>
      </nav>
    </header>
  );
};
