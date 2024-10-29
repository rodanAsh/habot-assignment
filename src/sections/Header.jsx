import React, { useState } from "react";
import logo from "../assets/habot-logo.jpg";
import down from "../assets/down.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Header = () => {
  {
    /* state variable for responsive header */
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="py-5 px-4 md:px-8">
      {!isMenuOpen && (
        <div className="w-full flex items-center justify-between">
          <div className="">
            <img
              className="w-[120px] sm:w-[181px] h-[43px] object-cover"
              src={logo}
              alt="habot-logo"
            />
          </div>
          <div className="sm:flex hidden items-center sm:gap-2 md:gap-5 sm:text-sm md:text-base text-[#6D6E71]">
            <span className="font-poppins">Find Suppliers</span> {/* poppins */}
            <span className="flex gap-1 font-poppins">
              <p>Find Service Tags</p> {/* poppins */}
              <img className="w-4" src={down} alt="down-arrow" />
            </span>
            <button className="header-btn border border-[#00732F] text-[#00732F] hover:border-none hover:text-white hover:bg-[#00732F] transition-all">
              Login / Sign Up {/* inter */}
            </button>
          </div>
          <button
            className="block p-2 text-2xl bg-[#072F57] rounded-md sm:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <img className="w-6 h-6" src={menu} alt="" />
          </button>
        </div>
      )}

      {isMenuOpen && (
        <div className="min-h-screen min-w-screen bg-white text- text-base #6D6E71 sm:hidden flex flex-col z-50 items-end gap-5">
          <button
            className="block p-2 text-2xl bg-[#072F57] rounded-md sm:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <img className="w-6 h-6" src={close} alt="" />
          </button>
          <span>Find Suppliers</span>
          <span className="flex md:gap-2">
            <p>Find Service Tags</p>
            <img className="w-4" src={down} alt="down-arrow" />
          </span>
          <button className="header-btn border border-[#00732F] text-[#00732F] hover:border-none hover:text-white hover:bg-[#00732F] transition-all">
            Login / Sign Up
          </button>
        </div>
      )}
    </section>
  );
};

export default Header;
