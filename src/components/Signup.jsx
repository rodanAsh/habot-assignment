import React from 'react'
import arrow from '../assets/rightArrow.png'

const Signup = () => {
  return (
    <section className='mt-12 px-8 flex gap-20'>
        <div className='flex-1'>
            <h2 className='font-extrabold text-4xl'>Ready to dive into <span>HABOT?</span></h2>
            <p className='mt-5 text-justify'>Signing up with HABOT opens the door to a world of new opportunitiesand potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
            <button className='mt-5 bg-green-700 pl-12 pr-5 py-2 flex items-center gap-5 rounded-md'><span className='text-white'>Sign up Today !</span> <img className='w-3' src={arrow }alt="" /></button>
        </div>
        <div className='flex-1 grid grid-cols-2 gap-5'>
            <span className='border border-orange-300 px-5 py-4 rounded-md text-center'>Abu Dhabi</span>
            <span className='border border-orange-300 px-5 py-4 rounded-md text-center'>Dubai</span>
            <span className='border border-orange-300 px-5 py-4 rounded-md text-center'>Sharjah & Ajman</span>
            <span className='border border-orange-300 px-5 py-4 rounded-md text-center'>Fujairah</span>
            <span className='border border-orange-300 px-5 py-4 rounded-md text-center'>Ras Al Khaimah</span>
            <span className='border border-orange-300 px-5 py-4 rounded-md text-center'>Umm Al Quwain</span>
        </div>
    </section>
  )
}

export default Signup