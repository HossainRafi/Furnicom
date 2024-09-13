import { Link, NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavMenu = () => {
  return (
    <ul>
      {navItems.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.label}</Link>
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
        <NavLink to="/" className="font-bold text-lg">
          Panto
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
