import React from "react";
import Logo from "./Logo";

const Header = ({ menu }) => {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-20 justify-between">
          <Logo />
          {menu} {/* כאן מופיעה הקומפוננטה שנשלחת כ-`prop` */}
        </div>
      </div>
    </div>
  );
};

export default Header;
