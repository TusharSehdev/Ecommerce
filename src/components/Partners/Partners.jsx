import React from "react";
import Img1 from "../../assets/brand/br-1.png";
import Img2 from "../../assets/brand/br-2.png";
import Img3 from "../../assets/brand/br-3.png";
import Img4 from "../../assets/brand/br-4.png";
import Img5 from "../../assets/brand/br-5.png";

console.log(Img1, Img2, Img3, Img4, Img5); // Check if images are being imported correctly

const Partners = () => {
  return (
    <div className="bg-gray-200 min-h-[100px] py-8 mt-24">
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-item-center">
          <img src={Img1} alt="" className="w-[80px] dark:invert" />
          <img src={Img2} alt="" className="w-[80px] dark:invert" />
          <img src={Img3} alt="" className="w-[80px] dark:invert" />
          <img src={Img4} alt="" className="w-[80px] dark:invert" />
          <img src={Img5} alt="" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
