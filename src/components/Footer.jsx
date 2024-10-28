import React from "react";
import logo from "../assets/footer-logo.svg";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="mt-20 bg-[#072F57] px-10 sm:px-20 py-5 sm:py-10 ">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-around text-white py-10 border-y-[1px] border-[#ffffff33] border-opacity-20">
        <div>
          <img
            className="w-[120px] sm:w-[181px] h-[43px] object-contain"
            src={logo}
            alt=""
          />
          <span className="text-sm sm:text-base font-poppins">&copy; R Singhania</span>{/* poppins */}
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex gap-2 flex-col">
            <span className="text-base hover:underline cursor-pointer font-arial">Company</span>{/* Arial */}
            <span className="text-xs hover:text-[#E7760D] cursor-pointer font-inter">About</span>{/* inter */}
            <span className="text-xs hover:text-[#E7760D] cursor-pointer font-inter">FAQ</span>
          </div>
          <div className="flex gap-2 flex-col">
            <span className="text-base hover:underline cursor-pointer font-arial">Terms</span>
            <span className="text-xs hover:text-[#E7760D] cursor-pointer font-inter">Data privacy</span>
            <span className="text-xs hover:text-[#E7760D] cursor-pointer font-inter">Terms</span>
            <span className="text-xs hover:text-[#E7760D] cursor-pointer font-inter">Accessibility</span>
          </div>
          <div className="flex gap-2 flex-col">
            <span className="text-base hover:underline cursor-pointer font-arial">Related</span>
            <span className="text-xs hover:text-[#E7760D] cursor-pointer font-inter">Find Buyer</span>
            <span className="text-xs hover:text-[#E7760D] cursor-pointer font-inter">Feedback</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="border border-white rounded-full p-2 hover:text-[#E7760D] hover:border-[#E7760D] cursor-pointer">
            <FaLinkedinIn />
          </span>
          <span className="border border-white rounded-full p-2 hover:text-[#E7760D] hover:border-[#E7760D] cursor-pointer">
            <FaTwitter />
          </span>
          <span className="border border-white rounded-full p-2 hover:text-[#E7760D] hover:border-[#E7760D] cursor-pointer">
            <FaFacebookF />
          </span>
          <span className="border border-white rounded-full p-2 hover:text-[#E7760D] hover:border-[#E7760D] cursor-pointer">
            <FaInstagram />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
