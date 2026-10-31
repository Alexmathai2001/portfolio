import React, { useState } from "react";

export const themes = [
  { id: "grey-black", label: "Grey + Black" },
  { id: "green-black", label: "Green + Black" },
  { id: "amber-black", label: "Amber + Black" },
  { id: "dracula", label: "Dracula" },
  { id: "solarized", label: "Solarized" },
  { id: "nord", label: "Nord" },
  { id: "gruvbox", label: "Gruvbox" },
  { id: "black-white", label: "Black + White" },
];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    document.documentElement.dataset.theme || "grey-black"
  );

  const change = (e) => {
    const next = e.target.value;
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (err) {}
  };

  return (
    <select
      value={theme}
      onChange={change}
      aria-label="Colour theme"
      className="cursor-pointer rounded-md border border-line bg-surface px-2 py-1.5 text-sm text-soft outline-none hover:border-muted"
    >
      {themes.map((t) => (
        <option key={t.id} value={t.id}>
          {t.label}
        </option>
      ))}
    </select>
  );
};

export default ThemeSwitcher;
