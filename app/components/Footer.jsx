import React from "react";
import OrbitingItems from "@/components/animata/list/orbiting-items";
import TextBorderAnimation from "../../components/animata/text/text-border-animation";

const Footer = () => {
  return (
    <div className="w-full bg-[#efefef] items-center justify-center h-full">
      {/* Main content with relative positioning */}
      <div className="relative w-full z-10 text-2xl bg-grainy md:text-7xl font-bold uppercase flex justify-center items-center text-white whitespace-pre">
        <OrbitingItems />
      </div>

      {/* Sticky footer */}
      <div className="sticky z-0 bg-grainy-blue bottom-0 left-0 w-full h-80 flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-white">
          <div className="flex  mt-5 md:mt-0 flex-row space-x-12 sm:space-x-16 md:space-x-24 text-lg sm:text-xl md:text-2xl">
            <ul>
              <li>
                <a href="#home">
                  <TextBorderAnimation text="בית" />
                </a>
              </li>
              <li>
                <a href="#services">
                  <TextBorderAnimation text="השירותים שלי" />
                </a>
              </li>
              <li>
                <a href="#projects">
                  <TextBorderAnimation text="עבודות אחרונות" />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#how-it-works">
                  <TextBorderAnimation text="איך זה עובד" />
                </a>
              </li>
              <li>
                <a href="#about">
                  <TextBorderAnimation text="קצת עליי" />
                </a>
              </li>
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0 text-white translate-y-1/3 sm:text-[192px] text-[40px] font-calendas">
            Yigal Lipsey
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
