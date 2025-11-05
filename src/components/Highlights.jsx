import React from "react";
import Lake_Adventure from "../assets/img/Lake_Adventure.png";
import star from "../assets/svg/star.svg";
import Night_in_Mountains from "../assets/img/Night_in_Mountains.png";
import Mountain_Yoga from "../assets/img/Mountain_Yoga.png";

const Highlights = () => {
  return (
    <section className="mb-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <p className="text-[20px] md:text-[24px] text-amber-300 text-center mb-2">
          по версии отдыхающих
        </p>
        <p className="text-[24px] md:text-[32px] text-center font-bold mb-10">
          Популярные направления
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
          <div className="relative w-full max-w-[380px] rounded-4xl overflow-hidden">
            <img
              src={Lake_Adventure}
              alt="Lake Adventure"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-white/40 rounded-l-lg flex items-center gap-1 px-2 py-1">
              <img src={star} alt="Star rating" className="w-4 h-4" />
              <span className="text-white text-sm font-medium">4.9</span>
            </div>
            <div className="absolute bottom-0 w-full bg-white/40 flex items-center justify-between p-3 rounded-b-4xl">
              <div>
                <p className="text-[20px] md:text-[24px] text-white font-semibold">
                  Озеро возле гор
                </p>
                <p className="text-[12px] md:text-[14px] text-white">
                  романтическое приключение
                </p>
              </div>
              <div>
                <p className="text-[18px] md:text-[20px] text-white bg-white/50 p-1 rounded-md px-2">
                  480$
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[380px] rounded-4xl overflow-hidden">
            <img
              src={Night_in_Mountains}
              alt="Night in Mountains with Friends"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-white/40 rounded-l-lg flex items-center gap-1 px-2 py-1">
              <img src={star} alt="Star rating" className="w-4 h-4" />
              <span className="text-white text-sm font-medium">4.9</span>
            </div>
            <div className="absolute bottom-0 w-full bg-white/40 flex items-center justify-between p-3 rounded-b-4xl">
              <div>
                <p className="text-[20px] md:text-[24px] text-white font-semibold">
                  Ночь в горах
                </p>
                <p className="text-[12px] md:text-[14px] text-white">
                  в компании друзей
                </p>
              </div>
              <div>
                <p className="text-[18px] md:text-[20px] text-white bg-white/50 p-1 rounded-md px-2">
                  500$
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[380px] rounded-4xl overflow-hidden">
            <img
              src={Mountain_Yoga}
              alt="Mountain Yoga"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-white/40 rounded-l-lg flex items-center gap-1 px-2 py-1">
              <img src={star} alt="Star rating" className="w-4 h-4" />
              <span className="text-white text-sm font-medium">5.0</span>
            </div>
            <div className="absolute bottom-0 w-full bg-white/40 flex items-center justify-between p-3 rounded-b-4xl">
              <div>
                <p className="text-[20px] md:text-[24px] text-white font-semibold">
                  Йога в горах
                </p>
                <p className="text-[12px] md:text-[14px] text-white">
                  для тех, кто заботится о себе
                </p>
              </div>
              <div>
                <p className="text-[18px] md:text-[20px] text-white bg-white/50 p-1 rounded-md px-2">
                  230$
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="w-full max-w-[244px] text-[16px] text-white p-2 rounded-md bg-[#1A3E3E] cursor-pointer transition-all duration-300 transform hover:bg-[#305151] hover:scale-105 hover:shadow-lg">
            Рейтинг направлений
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
