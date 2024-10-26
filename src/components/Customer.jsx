import React from 'react'

const Customer = () => {
    const src = "https://www.youtube.com/watch?v=IZLp-TZyDkQ/embed?autoplay=1&mute=1";
  return (
    // IZLp-TZyDkQ
    <section className='bg-[#072F57] h-fit py-20 px-10 mx-8 mt-20 flex justify-between items-center'>
        <div className=''>
            <iframe width="656" height="369" src="https://www.youtube.com/embed/IZLp-TZyDkQ" title="HABOT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='flex-1 text-white'>
            <div className='flex justify-around text-2xl font-semibold'>
                <span>Buyer</span>
                <span>Supplier</span>
            </div>
            <p>Post your requirements.</p>
            <p>Sit back for multiple suppliers to contact you.</p>
            <p>Choose among the suppliers based on the ratings and reviews.</p>
        </div>
    </section>
  )
}

export default Customer

