import React from "react";
import Img1 from "../../assets/Logo.png";
import Button from "../Shared/Button";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid grid-cols-3 place-items-center pb-20 pt-5">
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
            <div className=" grid grid-cols-2 pt-5 place-items-center">
              <div className="">
                <h1 className="text-xl font-bold py-2">Important Links</h1>
                <p className="py-2">Home</p>
                <p className="py-2">About</p>
                <p className="py-2">Contact</p>
                <p className="py-2">Blog</p>
              </div>
              <div className="">
                <h1 className="text-xl font-bold py-2">Quick Links</h1>
                <p className="py-2">Home</p>
                <p className="py-2">About</p>
                <p className="py-2">Contact</p>
                <p className="py-2">Blog</p>
              </div>
            </div>
          </div>
          {/* 3rd column  */}
          <div>
            <div className="pt-5 leading-10">
              <h1 className="text-xl font-bold py-2">Address</h1>
              <p>Jalandhar, Punjab</p>
              <p>Insta</p> <p>Snapchat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
