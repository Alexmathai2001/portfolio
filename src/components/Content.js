import React from "react";
import { profile } from "../data/resume";

const socials = [
  { href: "https://github.com/Alexmathai2001", icon: "bi-github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/alex-mathai/", icon: "bi-linkedin", label: "LinkedIn" },
  { href: "https://t.me/a1exmathai", icon: "bi-telegram", label: "Telegram" },
  { href: "https://www.instagram.com/a1exmathai/", icon: "bi-instagram", label: "Instagram" },
];

const Content = () => {

  const emailAddress = "alexmathai07@gmail.com"
  const handleDownload = () => {
    const element = document.createElement("a");
    element.setAttribute("href", "https://drive.google.com/file/d/1jjzJVz-IRVVTAyOl5UuySLW2_HG0vAbt/view?usp=sharing");
    element.setAttribute("download", "Alex_Mathai_Resume.pdf");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-5 pb-16 pt-24">
      <div className="relative z-10 flex max-w-2xl animate-fade-up flex-col items-center text-center">
        <span className="panel mb-6 inline-flex items-center gap-2 rounded-md px-4 py-1.5 text-xs text-soft">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent"></span>
          {profile.company} · {profile.location}
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Hi, I'm {profile.name}
        </h1>
        <p className="mt-4 text-lg text-soft sm:text-xl">{profile.role}</p>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {profile.summary}
        </p>

        {/* buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleDownload}
            className="btn bg-accent text-bg hover:opacity-80"
          >
            <i className="bi bi-file-earmark-text"></i>
            Resume
          </button>
          <a
            href={`mailto:${emailAddress}`}
            className="btn panel text-soft hover:bg-hover"
          >
            <i className="bi bi-envelope"></i>
            Email Me
          </a>
        </div>

        {/* links */}
        <div className="mt-12 flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="panel flex h-12 w-12 items-center justify-center rounded-md text-xl text-soft transition hover:bg-hover hover:text-fg"
            >
              <i className={`bi ${s.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Content;
