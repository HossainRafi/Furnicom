import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

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

        {/* fourth div: social media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="flex items-center space-x-2  hover:text-primary transition"
            >
              <FaFacebookF /> <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2  hover:text-primary transition"
            >
              <FaTwitter /> <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2  hover:text-primary transition"
            >
              <FaInstagram /> <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4">
        <p>
          {" "}
          &copy; {new Date().getFullYear()} Furnicom. All rights reserved
        </p>
        <p className="flex gap-4">
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};
