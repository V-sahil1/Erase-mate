import React from "react";
import { assets } from "../../public/assets/assets";

function Upload() {
  return (
    <div className="pb-16 relative mb-9    ">
      <h1
        className="text-center md:mb-[33px]  lg:text-4xl text-2xl md:text-3xl  font-semibold 
bg-gradient-to-r  md:from-gray-950  md:to-gray-300 from-blue-500 to-fuchsia-700 
hover:bg-gradient-to-r hover:from-blue-500  hover:to-fuchsia-700 cursor-pointer 
bg-clip-text text-transparent  py-6 md:py-10"
      >
        See the magic.Try now
      </h1>
      <div className=" absolute md:left-[44%] left-[20%] mb-10 ">
        <input type="file" id="upload1" hidden />
        <label
          htmlFor="upload1"
          className="inline-flex  gap-3 items-center justify-center px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 "
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-sm flex items-center justify-center">Upload your image</p>
        </label>
      </div>
    </div>
  );
}

export default Upload;
