import React, { useState } from "react";
import tick from "../assets/tick.svg";
import underline from "../assets/underline.svg";

const Customer = () => {
  {
    /* state variable to choose user type */
  }
  const [isBuyer, setIsBuyer] = useState("buyer");
  const handleBuyer = () => {
    setIsBuyer((prev) => (prev === "customer" ? "buyer" : prev));
  };
  const handleCustomer = () => {
    setIsBuyer((prev) => (prev === "buyer" ? "customer" : prev));
  };

  {
    /* iframe source link */
  }
  const src = "https://www.youtube.com/embed/IZLp-TZyDkQ";

  return (
    <section className="c-space md:px-10 py-10 md:py-20 bg-[#072F57] h-fit rounded-md gap-10 flex flex-col items-center lg:flex-row lg:justify-around lg:items-start font-poppins">
      <div className="my-auto">
        {/* this tag was copied from youtube */}
        <iframe
          className="w-[300px] h-[160px] sm:w-[360px] sm:h-[180px] md:w-[540px] md:h-[320px] "
          src={src}
          title="HABOT"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex-1 flex flex-col gap-1 text-white">
        <div className="flex justify-evenly gap-20 text-xl font-semibold">
          <span
            onClick={handleBuyer}
            className={
              `${isBuyer}` === "buyer" ? "underlined" : "cursor-pointer"
            }
          >
            <p>Buyer</p> {/* poppins */}
            {isBuyer === "buyer" && (
              <img className="w-[80%]" src={underline} alt="" />
            )}
          </span>
          <span
            onClick={handleCustomer}
            className={
              `${isBuyer}` === "customer" ? "underlined" : "cursor-pointer"
            }
          >
            <p>Supplier</p> {/* poppins */}
            {isBuyer === "customer" && (
              <img className="w-[80%]" src={underline} alt="" />
            )}
          </span>
        </div>
        <span className="flex items-start gap-2 mt-5 md:mt-10">
          <img className="w-3 mt-[2px] sm:mt-1 md:w-4" src={tick} alt="" />
          <p className="sub-text">Post your requirements.</p>
        </span>{" "}
        {/* poppins */}
        <span className="flex items-start gap-2">
          <img className="w-3 mt-[2px] sm:mt-1  md:w-4" src={tick} alt="" />
          <p className="sub-text">
            Sit back for multiple suppliers to contact you.
          </p>
        </span>
        <span className="flex items-start gap-2">
          <img className="w-3 mt-[2px] sm:mt-1 md:w-4" src={tick} alt="" />
          <p className="sub-text">
            Choose among the suppliers based on the ratings and reviews.
          </p>
        </span>
      </div>
    </section>
  );
};

export default Customer;
