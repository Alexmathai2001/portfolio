import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const linkClass = ({ isActive }) =>
  `flex items-center gap-2 rounded-md px-4 py-1.5 text-sm transition ${
    isActive
      ? "bg-line text-fg"
      : "text-muted hover:bg-hover hover:text-fg"
  }`;

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <p className="text-lg font-semibold tracking-tight">
          alexmathai<span className="text-muted">.dev</span>
        </p>
        <div className="flex items-center gap-2">
        <nav className="flex gap-1">
          <NavLink to="/" end className={linkClass}>
            <i className="bi bi-house"></i>
            <span>Home</span>
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            <i className="bi bi-grid"></i>
            <span>Projects</span>
          </NavLink>
        </nav>
        <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
