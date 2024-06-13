import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphones",
    price: "$130",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "#100",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Google Headphones",
    price: "$190",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Apple AirPods Max",
    price: "$300",
    aosDelay: "600",
  },
];
const ProductsHome = () => {
  return (
    <div>
      <div className="container">
        <Heading title="Our Products" subTitle="Explore Our Products" />
      </div>
      <ProductCard data={ProductData} />
    </div>
  );
};

export default ProductsHome;
