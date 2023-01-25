import React, { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex justify-between p-5 items-center content-center top-0 sticky z-50 bg-slate-50">
      <div className="flex">
        <h1 className="cursor-pointer mr-7">NEWS ID</h1>
        <ul
          className={`flex cursor-pointer ${
            isOpen
              ? "flex fixed text-center top-14 bg-white flex-col w-full leading-9 mx-auto left-0  "
              : "hidden  md:flex"
          }`}
        >
          <Link to="/">
            <li className="ml-3 mr-3 link link-underline link-underline-black">
              News
            </li>
          </Link>
          <Link to="/sports">
            <li className="ml-3 mr-3 link link-underline link-underline-black">
              Sports
            </li>
          </Link>
          <li className="ml-3 mr-3 link link-underline link-underline-black">
            Entertaiment
          </li>
          <li className="ml-3 mr-3 link link-underline link-underline-black">
            Health
          </li>
          <li className="ml-3 mr-3 link link-underline link-underline-black">
            Technology
          </li>
        </ul>
      </div>

      <div className="flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hidden md:flex"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <button className="md:hidden" onClick={handleToogleOpen}>
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars4Icon className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
