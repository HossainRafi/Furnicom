import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-20 mt-5 pb-5">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
        {/* first div: lgo and description */}
        <div className="md:col-span-2">
          <NavLink to="/">
            <img src="../../public/logo.png" className="h-8 w-32" />
          </NavLink>
          <p className=" md:mr-12 text-justify mt-5">
            Our company is dedicated to providing the best quality products to
            enhance your home and lifestyle. We combine style and comfort to
            transform your living spaces into modern sanctuaries.
          </p>
        </div>

        {/* second div: menu items-01 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className=" hover:text-primary transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* third div: menu items-02 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className=" hover:text-primary transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary transition">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary transition">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
