import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900 fixed pt-4 w-full text-white">
      <div className="flex justify-center">
        <p className="text-xl">alexmathai.dev</p>
      </div>
      <div className="flex justify-evenly py-2">
        <Link to={"/"} className="flex gap-2">
          <i class="bi bi-house"></i>
          <p>Home</p>
        </Link>
        <Link to={"/projects"} className="flex gap-2">
          <i class="bi bi-gear"></i>
          <p>Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
