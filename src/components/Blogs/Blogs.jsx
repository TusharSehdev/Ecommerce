import React from "react";
import Image1 from "../../assets/blogs/blog-1.jpg";
import Image2 from "../../assets/blogs/blog-2.jpg";
import Image3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    id: 1,
    img: Image1,
    title: "How to chose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores?",
    dateName: "Jan 10, 2024 By Tushar",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Image2,
    title: "How to chose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores?",
    dateName: "Jan 10, 2024 By Tushar",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Image3,
    title: "How to chose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maiores?",
    dateName: "Jan 10, 2024 By Tushar",
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="container">
      <div className="text-center mb-7">
        {/* heading- blog  */}
        <h1 className="text-4xl  font-bold py-2">Recent News</h1>
        <p className="text-xs text-gray-400">Explore Our Blogs</p>
      </div>
      {/* blog-content  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
        {BlogData.map((data) => (
          <div key={data.id} className="p-2">
            {/* image section  */}
            <div
              data-aos="fade-up"
              data-aos-duration={data.aosDelay}
              className="overflow-hidden rounded-2xl mb-2"
            >
              <img
                src={data.img}
                alt=""
                className="w-full h-[270px] object-cover rounded-2xl hover:scale-105 duration-500"
              />
            </div>
            <div className="space-y-2">
              <p className="text-xs">{data.dateName}</p>
              <p className="font-bold line-clamp-1">{data.title}</p>
              <p className="line-clamp-2">{data.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
