import React from "react";
import underline from "../assets/underline.svg";

const Banner = () => {
  return (
    <section className="banner-container flex flex-col gap-4 md:flex-row items-center justify-around">
      <div className="relative">
        <h2 className="banner-heading">
          Let Suppliers Find You {/* poppins */}
        </h2>
        <img
          className="absolute right-0 h-2 w-[40%] sm:w-[40%]"
          src={underline}
          alt=""
        />
      </div>
      <button className="banner-btn">Get Verified</button> {/* poppins */}
    </section>
  );
};

export default Banner;
