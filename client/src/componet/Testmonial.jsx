import React from "react";
import { testimonialsData } from "../../public/assets/assets";
import { RiDoubleQuotesR } from "react-icons/ri";
function Testmonial() {
  return (
    <div className="mx-4 md:mt-[50px] md:mb-[50px]">
      <h1
        className="text-center md:mb-[33px]  lg:text-4xl text-[23px] md:text-3xl  font-semibold 
bg-gradient-to-r md:from-gray-950  md:to-gray-300 from-blue-500 to-fuchsia-700
hover:bg-gradient-to-r hover:from-blue-500  hover:to-fuchsia-700 cursor-pointer 
bg-clip-text text-transparent pb-2"
      >
        Customer Testimonials
      </h1>
      <div className="md:flex flex-col md:flex-row items-center justify-center gap-6 mb-6 py-3 md:py-0">
        {testimonialsData.map((item, index) => {
          return (
        <div key={index} className="md:w-[35%] mb-9 w-[90%] shadow-md rounded-md p-6 bg-slate-50 md:mx-3 transition-all md:hover:translate-y-[-12px] duration-700">
              <p className="text-[30px] text-gray-700 mb-1
              "><RiDoubleQuotesR /></p>
              <p className="text-gray-600 mb-2">{item.text}</p>
              <div className="flex gap-4">
                <img
                  width={50}
                  className="rounded-full"
                  src={item.image}
                  alt=""
                />
                <div className="text-gray-700">
                  <p className="text-[20px] font-semibold   ">{item.author}</p>
                  <p className="text-[15px]">{item.jobTitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testmonial;
