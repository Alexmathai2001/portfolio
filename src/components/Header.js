import React from "react";

const Header = () => {
  return (
    <div className="w-full md:flex justify-between items-center">
      <div>
        <div className="w-full flex justify-center h-20 bg-gray-800 text-white font-medium ">
          <p className="text-xl">Alex.dev</p>
        </div>
        <div className="flex justify-evenly text-white bg-gray-800 py-2 md:h-20">
          <div className="flex gap-2">
            <i class="bi bi-house "></i>
            <p>Homes</p>
          </div>
          <div className="flex gap-2">
            <i class="bi bi-gear"></i>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
