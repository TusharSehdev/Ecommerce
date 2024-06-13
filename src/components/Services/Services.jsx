import React from "react";
import { FaCarSide } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div className="container my-2 md:my-20 lx:my-20">
      <div className="grid grid-cols-1 md:grid-cols-4  xl:grid-cols-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-4 gap-y-8">
            <FaCarSide className="text-5xl  text-primary" />
            <div>
              <p className="font-bold text-xl">Free Shipping</p>
              <p className="text-gray-500">Free Shipping On All Order</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center justify-center gap-4 gap-y-8">
              <SiTicktick className="text-5xl  text-primary" />
              <div>
                <p className="font-bold text-xl">Safe Money</p>
                <p className="text-gray-500">30 days Money Back</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-4 gap-y-8">
            <FaWallet className="text-4xl  text-primary" />
            <div>
              <p className="font-bold text-xl">Secure Payment</p>
              <p className="text-gray-500">All Paments secure</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-4 gap-y-8">
            <FaHeadphonesAlt className="text-5xl text-primary" />
            <div>
              <p className="font-bold text-xl">Online Support 24/7</p>
              <p className="text-gray-500">Technical Support 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
