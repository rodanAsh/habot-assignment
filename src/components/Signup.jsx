import React from 'react'
import arrow from '../assets/right-arrow.svg'

const Signup = () => {
  return (
    <section className='my-10 md:my-20 px-10 md:px-20 flex flex-col md:flex-row gap-20'>
        <div className='flex-1 font-poppins'>
            <h2 className='font-extrabold text-3xl md:text-4xl'>Ready to dive into <span className='text-[#271555]'>HABOT?</span></h2> {/* poppins */}
            <p className='mt-5 text-base md:text-lg'>Signing up with HABOT opens the door to a world of new opportunitiesand potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
            <button className='mt-5 text-sm sm:text-base bg-green-700 pl-12 pr-5 py-2 flex items-center gap-5 rounded-md'><span className='text-white font-bold'>Sign up Today !</span> <img className='w-6' src={arrow}alt="" /></button>
        </div>
        <div className='text-[#3E3E3E] flex-1 grid grid-cols-2 gap-5 items-center text-sm md:text-base font-inter font-semibold'>
            <span className='border border-[#E7760D] px-5 py-4 rounded-md text-center hover:bg-[#E7760D] hover:text-white transition-colors ease-in'>Abu Dhabi</span> {/* inter */}
            <span className='border border-[#E7760D] px-5 py-4 rounded-md text-center hover:bg-[#E7760D] hover:text-white transition-colors ease-in'>Dubai</span>
            <span className='border border-[#E7760D] px-5 py-4 rounded-md text-center hover:bg-[#E7760D] hover:text-white transition-colors ease-in'>Sharjah & Ajman</span>
            <span className='border border-[#E7760D] px-5 py-4 rounded-md text-center hover:bg-[#E7760D] hover:text-white transition-colors ease-in'>Fujairah</span>
            <span className='border border-[#E7760D] px-5 py-4 rounded-md text-center hover:bg-[#E7760D] hover:text-white transition-colors ease-in'>Ras Al Khaimah</span>
            <span className='border border-[#E7760D] px-5 py-4 rounded-md text-center hover:bg-[#E7760D] hover:text-white transition-colors ease-in'>Umm Al Quwain</span>
        </div>
    </section>
  )
}

export default Signup