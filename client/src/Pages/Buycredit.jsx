import React from "react";
import { assets, plans } from "../../public/assets/assets";

function Buycredit() { 
  return (
    <div className="min-h-screen text-center pt-14 mb-10">
      <button className="border text-gray-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-700 hover:bg-clip-text hover :text-transparent border-gray-400 px-10 py-2 mb-6 rounded-full">Our Plans</button>
      <h1 className="text-center md:mb-[33px]  lg:text-4xl text-[23px] md:text-3xl  font-semibold 
bg-gradient-to-r  md:from-gray-950  md:to-gray-300 from-blue-500 to-fuchsia-700 
hover:bg-gradient-to-r hover:from-blue-500  hover:to-fuchsia-700 cursor-pointer 
bg-clip-text text-transparent pb-2 mb-6 sm:mb-10">Choose the plan that's right for you</h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        
        
        {plans.map((val, index) => {
          return(
          <div className="bg-white drop-shadow-sm border rounded-lg py-12 px-8  text-gray-700 transition-all hover:scale-105 duration-700">
            <img width={40} src={assets.logo} alt="" />
            <p className="mt-3 font-semibold">{val.id}</p>
            <p className="text-sm">{val.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${val.price}</span>/ {val.credits} Credits
            </p>
            <button className="w-full bg-gray-800 text-sm text-white mt-8 rounded-md py-2.5 min-w-52">Purchase</button>
          </div>
        )})}
      </div>
    </div>
  );
}

export default Buycredit;
