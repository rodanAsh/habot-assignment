import React from 'react'
import hero_bg from '../assets/hero.png'
import service from '../assets/icon1.svg'
import location from '../assets/icon2.svg'

const Hero = () => {
  return (
    <section className='min-w-screen h-[500px] relative font-poppins'>
      {/* hero background poppins */}
      <div className='w-full h-full hero-gradient absolute inset-0 z-10 mix-blend-hard-light'></div>
      <img className='w-full h-full absolute inset-0 object-fill' src={hero_bg} alt="" />

      <div className="w-full h-full text-white z-20 relative flex flex-col gap-5 items-center justify-center">
        <div className='text-3xl leading-10  md:text-5xl md:leading-[55px] lg:text-[55px] lg:leading-[66px] text-center'>
          <h2 className='font-bold'>Are You a Supplier?</h2>
          <h2>Explore Matching Opportunities.</h2>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
          <span className='bg-white px-2 py-4 w-[300px] md:[400px] flex items-center border border-[#D1D5DB] gap-2 rounded-md'><img className='text-[#E7760D] w-4 md:w-[21px]' src={service} alt="" /><input className='text-xs text-[#6B7280] lg:placeholder:text-sm placeholder:text-[#6B7280] w-[240px] outline-none' type="text"placeholder='Search your required service here' /></span>
          <span className='bg-white px-2 py-4 w-[300px] md:[400px] flex items-center border border-[#D1D5DB] gap-2 rounded-md'><img className='text-[#E7760D] w-4 md:w-[21px]' src={location} alt="" /><input className='text-xs text-[#6B7280] lg:placeholder:text-sm placeholder:text-[#6B7280] w-[240px] outline-none' type="text" placeholder='Search your desired location here' /></span>
          <button className='bg-green-700 font-bold px-4 py-2 lg:text-base text-sm md:px-8 md:py-3 rounded-md'>Search</button>
        </div>
        <div className='text-xs md:text-base flex flex-col md:flex-row items-center justify-center gap-2'>
          <span className='font-bold'>Are you a buyer?</span>
          <span> <a className='underline' href="#">Click here if you are looking to post a requirements</a></span>
        </div>
      </div>
    </section>
  )
}

export default Hero