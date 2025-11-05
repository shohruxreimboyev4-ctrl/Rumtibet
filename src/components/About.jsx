import React from "react";
import People from "../assets/svg/People.svg";
import Shield from "../assets/svg/Shield.svg";
import Tag from "../assets/svg/Tag.svg";
import MountainViews from "../assets/img/MountainViews.png";

const About = () => {
  return (
    <section className="bg-[#F3F5F4] py-17 mb-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          <div className="w-full lg:w-auto">
            <p className="text-[20px] md:text-[24px] text-amber-300 mb-2">
              наше предложение
            </p>
            <p className="text-[24px] md:text-[32px] font-bold mb-6">
              Лучшие программы для тебя
            </p>
            <p className="text-[16px] md:text-[18px] mb-10 leading-relaxed">
              Его корни уходят в один фрагмент классической латыни 45 года{" "}
              <br className="hidden md:block" /> н.э., то есть более двух
              тысячелетий назад. Ричард МакКлинток,{" "}
              <br className="hidden md:block" /> профессор латыни из колледжа.
            </p>

            <div className="flex items-start gap-5 mb-10">
              <img src={People} alt="" className="flex-shrink-0" />
              <div>
                <p className="text-[16px] md:text-[18px] font-bold mb-1">
                  Опытный гид
                </p>
                <p className="text-[14px] leading-snug">
                  Для современного мира базовый вектор развития предполагает{" "}
                  <br className="hidden xl:block" /> независимые способы
                  реализации соответствующих условий активизации.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 mb-10">
              <img src={Shield} alt="" className="flex-shrink-0" />
              <div>
                <p className="text-[16px] md:text-[18px] font-bold mb-1">
                  Безопасный поход
                </p>
                <p className="text-[14px] leading-snug">
                  Для современного мира базовый вектор развития предполагает{" "}
                  <br className="hidden xl:block" /> независимые способы
                  реализации соответствующих условий активизации.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 mb-8">
              <img src={Tag} alt="" className="flex-shrink-0" />
              <div>
                <p className="text-[16px] md:text-[18px] font-bold mb-1">
                  Лояльные цены
                </p>
                <p className="text-[14px] leading-snug">
                  Для современного мира базовый вектор развития предполагает{" "}
                  <br className="hidden xl:block" /> независимые способы
                  реализации соответствующих условий активизации.
                </p>
              </div>
            </div>

            <button className="w-full md:w-[236px] text-[16px] text-white p-2 rounded-md bg-[#1A3E3E] cursor-pointer transition-all duration-300 transform hover:bg-[#305151] hover:scale-105 hover:shadow-lg">
              Стоимость программ
            </button>
          </div>

          <div className="w-full lg:w-auto flex justify-center">
            <img src={MountainViews} alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
