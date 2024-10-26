import React from 'react'
import logo from '../assets/habot-logo.jpg'
import down from '../assets/down.png'

const Header = () => {
  return (
    <section className='min-w-[100%] h-[86px] py-4 px-8 flex items-center justify-between'>
        <div className=''>
            <img className='w-[181px] h-[43px] object-cover' src={logo} alt="habot-logo" />
        </div>
        <div className='flex items-center gap-5'>
            <span>Find Suppliers</span>
            <span className='flex items-center gap-1'><p>Find Service Tags</p><img className='w-[10px]' src={down} alt="down-arrow" /></span>
            <button className='border border-[#00732F] text-[#00732F] px-8 py-4 rounded-md hover:border-none hover:text-white hover:bg-[#00732F] transition-all'>Login / Sign Up</button>
        </div>
    </section> 
  )
}

export default Header