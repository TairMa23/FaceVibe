import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/images/logo.png" className="w-[100px] object-cover" alt="Logo" />
      <span className="mt-1 text-me font-bold text-my-Blue dark:text-dark-text fnt">
        FACEVIBE
      </span>
    </div>
  );
};

export default Logo;
