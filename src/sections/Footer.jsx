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
      <div className="footer-border flex flex-col md:flex-row gap-5 items-center justify-around">
        {/* footer logo */}
        <div>
          <img
            className="w-[120px] sm:w-[181px] h-[43px] object-contain"
            src={logo}
            alt=""
          />
          <span className="text-sm sm:text-base font-poppins">
            &copy; R Singhania
          </span>
        </div>
        {/* footer body */}
        <div className="flex justify-between gap-5">
          <div className="flex gap-2 flex-col">
            <span className="footer-heading">Company</span>
            <span className="footer-subtext">About</span>
            <span className="footer-subtext">FAQ</span>
          </div>
          <div className="flex gap-2 flex-col">
            <span className="footer-heading">Terms</span>
            <span className="footer-subtext">Data privacy</span>
            <span className="footer-subtext">Terms</span>
            <span className="footer-subtext">Accessibility</span>
          </div>
          <div className="flex gap-2 flex-col">
            <span className="footer-heading">Related</span>
            <span className="footer-subtext">Find Buyer</span>
            <span className="footer-subtext">Feedback</span>
          </div>
        </div>
        {/* social icons */}
        <div className="flex items-center gap-5">
          <span className="footer-socials">
            <FaLinkedinIn />
          </span>
          <span className="footer-socials">
            <FaTwitter />
          </span>
          <span className="footer-socials">
            <FaFacebookF />
          </span>
          <span className="footer-socials">
            <FaInstagram />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
