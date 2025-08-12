import React from "react";
import { assets } from "../../public/assets/assets";

function Footer() {
  return (
    <div className="py-3 mb-4 ">

    <div className="flex items-center px-10 justify-between gap-4 py-3"> 
      <img src={assets.logo} width={90} alt="" />
      <p className="">Copyright @sahilvardekar | All right reserved.</p>
      <div className="md:flex md:items-center md:justify-center w-[40px] mr-7">
        <img src={assets.facebook_icon} width={40} alt="" />
        <img src={assets.twitter_icon} width={40} alt="" />
        <img src={assets.google_plus_icon} width={40} alt="" />
      </div>

      
    </div>
    <h1 className="text-center mt-2 font-semibold text-2xl rub ">Made with ❤️ in India</h1>
    </div>
  );    
}

export default Footer;