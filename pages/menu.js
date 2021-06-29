import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import curry from "../assets/curry.jpg";

const menu = () => {
  return (
    <div>
      <Header />
      <div className="relative pb-1 md:pb-0">
        <div className="hidden md:block">
          <Image
            src={curry}
            className="opacity-60"
            height={1000}
            width={1000}
          />
        </div>
        <div
          className="w-2/3 absolute h-full top-0 right-0"
          style={{ backgroundColor: "#10161C" }}
        >
          <div className="text-white">
            <hr className="w-1/2  mx-auto mt-10 border-gold" />
            <h1 className="text-4xl uppercase font-changa lg:text-5xl text-center mt-4">
              Dining Menu
            </h1>
            <hr className="w-2/3 mx-auto mt-4 border-gold" />
            <p className="text-center mt-2 text-xl text-gold">
              All specialty dishes are served with rice, roti and papadam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
