import React, { useState } from "react";
import { assets } from "../../public/assets/assets";

function Bgslider() {
  const [slider, Setslider] = useState(20);
  const handleSlider = (e) => {
    Setslider(e.target.value);
  };
  return (
    <div className="my-8">
      <h1
        className="text-center md:mb-[33px]  lg:text-4xl text-[23px] md:text-3xl  font-semibold 
bg-gradient-to-r md:from-gray-950  md:to-gray-300 from-blue-500 to-fuchsia-700
hover:bg-gradient-to-r hover:from-blue-500  hover:to-fuchsia-700 cursor-pointer 
bg-clip-text text-transparent pb-2 my-6"
      >
        Remove Background with High <br /> Quailty and Accuracy
      </h1>
      <div className="relative md:w-full max-w-3xl overflow-hidden m-auto rounded-xl w-[300px]">
        {/* paragraph image */}
        <img
          src={assets.image_w_bg}
          alt=""
          style={{ clipPath: `inset(0 ${100.2 - slider}% 0 0)` }}
        />

        <img
          className="absolute top-0 left-0 w-full h-full"
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${slider}%)` }}
          alt=""
        />

        <input
          className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
          type="range"
          min={0}
          max={100}
          value={slider}
          onChange={handleSlider}
        />
      </div>
    </div>
  );
}

export default Bgslider;
