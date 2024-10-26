import React from 'react'
import hero_bg from '../assets/hero.png'
import { FaLocationDot,FaSuitcaseRolling  } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className='w-full h-[500px] relative'>
      {/* hero background */}
      <div className='w-full h-full bg-[#2f6ab1] absolute inset-0 z-10 mix-blend-hard-light'></div>
      <img className='w-full h-full absolute inset-0 object-fill' src={hero_bg} alt="" />

      <div className="w-full h-full text-white z-20 relative flex flex-col gap-5 items-center justify-center">
        <div className='text-5xl text-center'>
          <h2 className='font-bold'>Are You a Supplier?</h2>
          <h2>Explore Matching Opportunities.</h2>
        </div>
        <div className='flex items-center gap-2'>
          <span className='bg-white px-2 py-4 flex items-center gap-1 rounded-md'><FaSuitcaseRolling className='text-orange-300' /><input className='placeholder:text-sm w-[240px] outline-none' type="text"placeholder='Search your required service here' /></span>
          <span className='bg-white px-2 py-4 flex items-center gap-1 rounded-md'><FaLocationDot className='text-orange-300' /><input className='placeholder:text-sm w-[240px] outline-none' type="text" placeholder='Search your desired location here' /></span>
          <button className='bg-green-700 px-8 py-3 rounded-md'>Search</button>
        </div>
        <div>
          <span className='font-bold'>Are you a buyer?</span>
          <span> <a className='underline' href="#">Click here if you are looking to post a requirements</a></span>
        </div>
      </div>
    </section>
  )
}

export default Hero