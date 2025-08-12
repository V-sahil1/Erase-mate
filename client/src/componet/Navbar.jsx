import React from "react";
import { assets } from "../../public/assets/assets";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

function Navbar() {
  const {openSignIn }=useClerk()
  const {isSignedIn,user} = useUser()
  return (
    <div className="  flex items-start shadow-md justify-between   md:px-[40px] px-3 py-3 ld:mx-44">
      <Link to="/">
        <img
          src={assets.logo}
          alt=""
          className="md:w-[130px] w-33 h-[40px] mt-0 md:h-[60px]"
        />
      </Link>
      { isSignedIn ? <div className=" mt-4 ">
        <UserButton />
      </div> : <button onClick={()=>{openSignIn({})}} className="bg-gray-950/95 text-white md:w-[180px] rounded-[60px] md:text-[19px] text-xl w-[170px] h-[40px]  md:h-[60px] flex items-center justify-center gap-3">
        Get Started <FaArrowRightLong className="mt-1" />
      </button>}
     
    </div>
  );
}

export default Navbar;
