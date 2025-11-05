import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="from-[#779097] to-[#73909e] bg-gradient-to-r sticky top-0 left-0 z-50">
        <div className="max-w-[1200px] m-auto flex justify-between items-center py-3 px-4">
          <a href="index.html">
            <img src={logo} alt="" className="w-[120px]" />
          </a>

          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-10">
              {["Главная", "Про гида", "Программа тура", "Стоимость"].map(
                (item) => (
                  <li
                    key={item}
                    className="relative group text-[18px] text-white cursor-pointer transition-colors duration-300 hover:text-cyan-300"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                )
              )}
            </ul>

            <button className="w-[157px] rounded-md text-white text-[16px] p-2 bg-[#1A3E3E] cursor-pointer transition-all duration-300 hover:bg-[#305151] hover:scale-105">
              Консультация
            </button>
          </div>

          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        <div
          className={`md:hidden bg-[#6f8f9a] px-4 pb-4 transform transition-transform duration-300 ${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {["Главная", "Про гида", "Программа тура", "Стоимость"].map(
              (item) => (
                <li
                  key={item}
                  className="text-white text-[18px] cursor-pointer hover:text-cyan-300 transition-colors duration-300"
                >
                  {item}
                </li>
              )
            )}
          </ul>
          <button className="w-full mt-4 rounded-md text-white text-[16px] p-2 bg-[#1A3E3E] cursor-pointer transition-all duration-300 hover:bg-[#305151] hover:scale-105">
            Консультация
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
