import React from "react";
import PropTypes from "prop-types";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import Logo from "../../assets/Logo.png";
import DarkMode from "./DarkMode";
import { MdArrowDropDown } from "react-icons/md";

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
  {
    id: 4,
    name: "Others",
    link: "/#",
  },
];
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blogs",
  },
];
function Navbar(props) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white shadow-md ">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl duration-200 relative z-40"
            >
              <div className="flex gap-[10px] items-center justify-center">
                <img className="w-[50px]" src={Logo} alt="" />
                <h1>ESHOP</h1>
              </div>
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-primary duration-200 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                <li className="  relative cursor-pointer group gap-4">
                  <a
                    href=""
                    className="flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black dark:hover:text-primary py-2 px-1"
                  >
                    More
                    <span>
                      <MdArrowDropDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* DropDown Links */}
                  <div className="absolute z-[999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 dark dark:text-primary px-2 py-3">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            href={data.link}
                            className="px-2 py-2 text-gray-500 hover:text-black dark:hover:text-white hover:bg-primary/40 font-semibold rounded-xl inline-block w-full"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* SearchBar Section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            <button className="relative group p-3">
              <FaShoppingCart className=" text-xl text-gray-900 dark:text-gray-400 group-hover:text-primary " />
              <div className="w-4 h-4 bg-white text-black rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* Dark Mode Enabler */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
