import React from "react";

const Preview = () => {
  return (
    <div className="w-full bg-[#efefef] items-center justify-center h-full  ">
      {/* add relative positioning to the main conent */}
      <div className="relative  w-full z-10 text-2xl  bg-grainy md:text-7xl font-bold uppercase flex justify-center items-center  text-white whitespace-pre">
        {/* לשים פה את הקומפננטה התחתונה  */}
      </div>

      {/* Sticky footer. The only important thing here is the z-index, the sticky position and the bottom value */}
      <div className="sticky z-0  bg-red-800  bottom-0 left-0 w-full h-80 flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-primaryRed">
          <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Docs</li>
              <li className="hover:underline cursor-pointer">Comps</li>
            </ul>
            <ul>
              <li className="hover:underline cursor-pointer">Github</li>
              <li className="hover:underline cursor-pointer">Instagram</li>
              <li className="hover:underline cursor-pointer">X (Twitter)</li>
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0  translate-y-1/3 sm:text-[192px]  text-[80px] text-primaryRed font-calendas">
            fancy
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Preview;
