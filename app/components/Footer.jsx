import React from "react";
import ProjectsSection from "./ProjectsSection";
import HowItWorksPage from "./HowItWorks";

const Footer = () => {
  return (
    <div className="w-full bg-[#efefef] items-center justify-center h-full  ">
      {/* add relative positioning to the main content */}
      <div className="relative  w-full z-10 text-2xl  bg-grainy md:text-7xl font-bold uppercase flex justify-center items-center  text-white whitespace-pre">
        {/* <HowItWorksPage /> */}
      </div>

      {/* Sticky footer. The only important thing here is the z-index, the sticky position and the bottom value */}
      <div className="sticky z-0  bg-grainy-blue  bottom-0 left-0 w-full h-80 flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-primaryRed">
          <div className="flex flex-row space-x-12 sm:space-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
              <li className="hover:underline cursor-pointer">בית</li>
              <li className="hover:underline cursor-pointer">השירותים שלי</li>
              <li className="hover:underline cursor-pointer">עבודות אחרונות</li>
            </ul>
            <ul>
              <li className="hover:underline cursor-pointer">איך זה עובד</li>
              <li className="hover:underline cursor-pointer">קצת עליי</li>
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0  translate-y-1/3 sm:text-[192px]  text-[40px] text-primaryRed font-calendas">
            Yigal Lipsey
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
