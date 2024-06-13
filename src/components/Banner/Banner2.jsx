import React from "react";
import Image2 from "../../assets/category/smartwatch2.png";
import Button from "../Shared/Button";

const Banner = () => {
  return (
    <div className="container pb-20 pt-20">
      <div className="rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white bg-banner2-color">
        {/* banner heading  */}

        <div className="p-6 sm:p-8">
          <p>30% off</p>
          <h1 className="uppercase text-4xl lg:text-7xl font-bold">
            Happy Hours
          </h1>
          <p>14th Jan to 28th Jan</p>
        </div>

        {/* banner image  */}

        <div>
          <img
            src={Image2}
            alt=""
            className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
          />
        </div>

        {/* Banner Title */}

        <div>
          <p className="font-bold text-xl">Smart Solo</p>
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
            textColor="text-green-500"
            className="m-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
