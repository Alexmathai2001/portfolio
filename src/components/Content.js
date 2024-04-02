import React from "react";

const Content = () => {

  const emailAddress = "alexmathai07@gmail.com"
  const handleDownload = () => {
    const element = document.createElement("a");
    element.setAttribute("href", "https://drive.google.com/file/d/1nWM5K59UkHFvq1qUxodhf3FWfWB_xUO1/view?usp=drive_link");
    element.setAttribute("download", "Alex_Mathai_Resume.pdf");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    <div className="h-screen flex flex-col w-full bg-slate-600 text-white">
      <div className="flex flex-grow"></div>
      <div className="flex justify-center">
        <div>
          <p className="text-3xl md:text-5xl md:my-2 md:mb-10">Hi! I'm Alex mathai</p>

          {/* links */}
          <div className="mt-5 flex items-center justify-evenly">
            {/* github */}
            <a href="https://github.com/Alexmathai2001">
            <i class="bi bi-github text-4xl"></i>
            </a>
            {/* linkedin */}
            <a href="https://www.linkedin.com/in/alex-mathai/">
            <i class="bi bi-linkedin text-4xl"></i>
            </a>
            {/* telegram */}
            <a href="https://t.me/a1exmathai">
            <i class="bi bi-telegram text-4xl"></i>
            </a>
            {/* insta */}
            <a href="https://www.instagram.com/a1exmathai/">
            <i class="bi bi-instagram text-4xl"></i>
            </a>
          </div>

          {/* buttons */}
          <div className="mt-3 flex justify-evenly md:mt-12">
            <button onClick={handleDownload} className="px-5 md:px-8 md:py-4 py-2 bg-black rounded-lg text-sm">Resume</button>
            <a
          href={`mailto:${emailAddress}`}
          className="px-5 md:px-8 md:py-4 py-2 bg-black rounded-lg text-sm block text-center"
          style={{ textDecoration: 'none' }}
        >
          Email Me
        </a>
          </div>
        </div>
      </div>
      <div className="flex flex-grow"></div>
    </div>
  );
};

export default Content;
