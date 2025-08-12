import React from "react";
import { assets, step } from "../../public/assets/assets";

function Steps() {
  return (
    <div className="my-4 mx-4 mt-9 md:mt-0 lg:mx-44py-20 xl:py-40">
      <h1
        className="text-center md:mb-[33px]  lg:text-4xl text-[23px] md:text-3xl  font-semibold 
bg-gradient-to-r  md:from-gray-950  md:to-gray-300 from-blue-500 to-fuchsia-700 
hover:bg-gradient-to-r hover:from-blue-500  hover:to-fuchsia-700 cursor-pointer 
bg-clip-text text-transparent pb-2"
      >
        Steps to remove background <br /> Image in seconds
      </h1>
      <div className="flex items-start flex-wrap  gap-4 mt-16 xl:mt-24 justify-center">
        {step.map((img, index) => (
          <div className="flex items-start gap-4 border drop-shadow-md p-7 pb-10 rounded transition-all md:hover:translate-y-[-40px] cursor-pointer  duration-700 hover:rounded-xl bg-white">
            <img src={img.img} alt="" className="max-w-9" />
            <div>
              <p className="text-xl font-medium">{img.name}</p>
              <p className="text-sm text-neutral-500 mt-1">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
