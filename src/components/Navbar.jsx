import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 items-center content-center">
      <div className="flex">
        <h1 className="cursor-pointer">NEWS ID</h1>
        <ul className="flex cursor-pointer ">
          <li className="ml-10 mr-3 link link-underline link-underline-black">News</li>
          <li className="ml-3 mr-3 link link-underline link-underline-black">Sports</li>
          <li className="ml-3 mr-3 link link-underline link-underline-black">Entertaiment</li>
          <li className="ml-3 mr-3 link link-underline link-underline-black">Health</li>
          <li className="ml-3 mr-3 link link-underline link-underline-black">Technology</li>
        </ul>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
