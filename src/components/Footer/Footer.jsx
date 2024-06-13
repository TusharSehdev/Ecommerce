import React from "react";
import Img1 from "../../assets/Logo.png";
import Button from "../Shared/Button";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid grid-cols-3 pb-20 pt-5">
          {/* company details  */}
          <div className="py-8 px-4">
            <img src={Img1} alt="" className="w-[50px]" />
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consecte Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Culpa, aliquid.
            </p>
            <p className="text-gray-500 mt-4 mb-4">
              Made with ❤ by "Tushar Sehdev".
            </p>
            <Button
              text="Subscribe On Youtube"
              bgColor="bg-primary"
              textColor="text-white"
            />
          </div>
          {/* 2nd column  */}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
