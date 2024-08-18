import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Menu = () => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  const menuContent = [
    {
      text: "Home",
      url: "/",
    },
     
  ];

  const mobileToggleClick = () => {
    setMobileMenuToggle(!mobileMenuToggle);
  };

  return (
    <div className="flex items-center">
      <div
        className={`fixed top-0 ${
          mobileMenuToggle ? "left-0" : "-left-[75%]"
        } bg-[#000000ce] text-white flex flex-col justify-center items-center text-4xl font-semibold h-full w-[75%] z-50 md:hidden duration-700`}
      >
        <ul>
          {menuContent.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center py-4 hover:text-my-pink duration-200"
              >
                <a href={item.url}>{item.text}</a>
              </li>
            );
          })}
          <div className="flex items-center gap-4 mt-12"></div>
        </ul>
        {/* Render DarkModeToggle component in mobile menu */}
        <DarkModeToggle />
      </div>
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-9 font-[400] text-lg dark:text-white">
          {menuContent.map((item, index) => {
            return (
              <li key={index} className="flex items-center">
                <a href={item.url}>{item.text}</a>
              </li>
            );
          })}
          {/* Render DarkModeToggle component in desktop menu */}
          <li className="flex items-center">
            <DarkModeToggle />
          </li>
        </ul>
      </nav>

      <div className="md:hidden flex fixed top-26 right-6 cursor-pointer z-50">
        <span className="bg-my-pink text-white p-2" onClick={mobileToggleClick}>
          {mobileMenuToggle ? (
            <IoClose size={"26px"} />
          ) : (
            <RxHamburgerMenu size={"26px"} />
          )}
        </span>
      </div>
    </div>
  );
};

export default Menu;
