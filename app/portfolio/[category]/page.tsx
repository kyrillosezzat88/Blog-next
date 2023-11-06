import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";
import Image from "next/image";
import "./page.css";

type categoryTypes = {
  params: {
    category: string;
  };
};
const getData = (cat: "applications" | "illustrations" | "websites") => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};
const Category = ({ params: { category } }: categoryTypes) => {
  let data = null;

  if (
    category === "applications" ||
    category === "illustrations" ||
    category === "websites"
  ) {
    data = getData(category);
  }
  return (
    <section>
      <div className="title mb-10">
        <h1 className=" text-4xl md:text-8xl font-bold mb-3">Our Works</h1>
        <h2 className="text-[#53c28b] font-bold text-2xl">{category}</h2>
      </div>
      {data?.map(({ id, image, title, desc }) => (
        <div
          className="flex flex-wrap md:flex-nowrap items-center gap-10 item"
          key={id}
        >
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-8">{title}</h1>
            <p>{desc}</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="image-container">
              <Image fill={true} src={image} alt="" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Category;
