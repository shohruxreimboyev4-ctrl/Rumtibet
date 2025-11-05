import React from "react";
import mountain from "../assets/img/mountain.png";
const Showcase = () => {
  return (
    <section>
      <div className="mb-20">
        <div className="relative">
          <img src={mountain} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-8 max-w-[1200px] m-auto">
            <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-semibold text-white text-center mb-4 md:mb-6">
              Насладись прогулкой в горах <br className="hidden md:block" /> с
              командой единомышленников
            </h2>
            <div className="w-full max-w-[1180px] rounded-md bg-white/20 px-4">
              <form className="flex flex-col md:flex-row items-center justify-center p-4 md:p-10 gap-5">
                <div className="w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Локация для тура"
                    className="w-full md:w-[270px] p-2 rounded-md text-white placeholder-white border border-white bg-transparent"
                  />
                  <p className="text-white text-[14px]">выберите из списка</p>
                </div>
                <div className="w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Дата похода"
                    className="w-full md:w-[270px] p-2 rounded-md text-white placeholder-white border border-white bg-transparent"
                  />
                  <p className="text-white text-[14px]">укажите диапазон</p>
                </div>
                <div className="w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Участники"
                    className="w-full md:w-[270px] p-2 rounded-md text-white placeholder-white border border-white bg-transparent"
                  />
                  <p className="text-white text-[14px]">минимум 4 человека</p>
                </div>
                <div className="w-full md:w-auto">
                  <button className="w-full md:w-[213px] text-[#1A3E3E] bg-white rounded-md p-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Найти программу
                  </button>
                  <p className="text-white invisible">.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
