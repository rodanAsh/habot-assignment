import React from 'react'
import underline from '../assets/underline.svg'

const Banner = () => {
  return (
    <section className='bg-[#E8FBFF] my-20 px-10 py-16 flex flex-col gap-4 md:flex-row items-center justify-around font-poppins'>
        <div className='relative'>
          <h2 className='text-xl sm:text-2xl font-semibold'>
            Let Suppliers Find You  {/* poppins */}
          </h2>
          <img className='absolute right-0 h-2 w-[40%] sm:w-[40%]' src={underline} alt="" />
        </div>
        <button className='bg-[#E7760D] text-white text-sm px-8 py-2 rounded-md'>Get Verified</button> {/* poppins */}
    </section>
  )
}

export default Banner

