import React from 'react'
import services from '../data/services'


const Services = () => {
  return (
    <section className='my-20 mx-10 md:mx-20 font-poppins'> {/* poppins */}
        <div className='text-center mx-auto w-full sm:w-[90%] md:w-[80%] lg:[70%]'>
            <h2 className='text-xl sm:text-2xl font-bold'>How it works?</h2>
            <p className='mt-4 text-xs sm:text-sm md:text-base'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
        </div>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-3'>
            {
                services.map((service) => (
                    <div key={service.id} className='flex flex-col items-center justify-center gap-4 odd:bg-[#E8FBFF] py-5'>
                        <img className='w-[40px] sm:w-[55px] md:[60px] lg:w-[70px]' src={service.icon} alt="" />
                        <p className='text-center text-xs sm:text-sm md:text-base w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%]'>{service.label}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Services