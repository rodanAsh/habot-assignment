import React from "react";
import arrow from "../assets/right-arrow.svg";

const Signup = () => {
  return (
    <section className="c-space flex flex-col md:flex-row gap-20">
      {/* flex left */}
      <div className="flex-1 font-poppins">
        <h2 className="font-extrabold text-3xl md:text-4xl">
          Ready to dive into <span className="text-[#271555]">HABOT?</span>
        </h2>{" "}
        <p className="mt-5 text-base md:text-lg">
          Signing up with HABOT opens the door to a world of new
          opportunitiesand potential for business growth. Gain access to a
          vibrant community of like-minded individuals, unlock valuable
          resources, and take the first step towards realizing your
          entrepreneurial dreams.
        </p>
        <button className="mt-5 sub-text signup-btn">
          <span className="text-white font-bold">Sign up Today !</span>
          <img className="w-6" src={arrow} alt="" />
        </button>
      </div>
      {/* flex right */}
      <div className="flex-1 grid grid-cols-2 gap-5 items-center grid-container">
        <span className="grid-element">Abu Dhabi</span>
        <span className="grid-element">Dubai</span>
        <span className="grid-element">Sharjah & Ajman</span>
        <span className="grid-element">Fujairah</span>
        <span className="grid-element">Ras Al Khaimah</span>
        <span className="grid-element">Umm Al Quwain</span>
      </div>
    </section>
  );
};

export default Signup;
