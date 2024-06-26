import React from "react";
import Image from "../../assets/hero/headphone.png";
import Button from "../Shared/Button";

const Banner = () => {
  return (
    <div className="container pb-20">
      <div className="rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white bg-banner-color">
        {/* banner heading  */}

        <div
          data-aos="slide-right"
          data-aos-duration="500"
          data-aos-once="true"
          className="p-6 sm:p-8"
        >
          <p>30% off</p>
          <h1 className="uppercase text-4xl lg:text-7xl font-bold">
            FINE SMILE
          </h1>
          <p>10th Jan to 28th Jan</p>
        </div>

        {/* banner image  */}

        <div data-aos="zoom-in" data-aos-once="true">
          <img
            src={Image}
            alt=""
            className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
          />
        </div>

        {/* Banner Title */}

        <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          <p className="font-bold text-xl">Air Solo Base</p>
          <h1 className="uppercase text-4xl lg:text-7xl font-bold">
            Winter Sale
          </h1>
          <p className="w-[200px] py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
            molestiae.
          </p>
          <Button
            text="Shop Now"
            bgColor="bg-white"
            textColor="text-primary"
            className="m-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
