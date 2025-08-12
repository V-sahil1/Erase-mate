import React from 'react'
import { assets } from '../../public/assets/assets'

function Header() {
  return (
    <div className='flex items-center justify-between mt-[83px] max-sm:flex-col-reverse gap-y-10  px-4 lg:px-44 '>
        {/* ---------------------leftside----------------------- */}
        <div >
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>Remove the <br /> <span className='bg-gradient-to-r from-blue-600 to-fuchsia-500 bg-clip-text text-transparent'> background</span> from <br /> images for free</h1>
           <p className='my-6 text-gray-500 text-[15px]'>Easily erase image backgrounds in seconds — no design skills needed. <br  />Upload your photo and get a clean, transparent result instantly.</p>

            <div>
                <input type="file" id='upload1' hidden />
                <label htmlFor="upload1" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-fuchsia-500 m-auto hover:scale-105 transition-all ml-[56px] duration-700'>
                    <img width={20} src={assets.upload_btn_icon} alt="" />
                    <p className='text-white text-sm'>Upload your image</p>
                </label>
            </div>
        </div>
          {/* ---------------------Rightside----------------------- */}
        <div className='w-full max-w-md'>
            <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header