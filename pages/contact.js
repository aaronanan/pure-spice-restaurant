import React from "react";
import Header from "../components/Header";
import spoonspice2 from "../assets/spoonspice2.jpg";
import Image from "next/image";
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";

const contact = () => {
  return (
    <div>
      <Header />
      <div className="relative pb-1 md:pb-0">
        <div className="md:hidden">
          <Image
            src={spoonspice2}
            height={900}
            width={600}
            className="opacity-60"
          />
        </div>
        <div className="hidden md:block">
          <Image src={spoonspice2} className="opacity-60" />
        </div>
        <div className="absolute top-10 left-2 text-white px-2 md:left-1/2 lg:left-2/3">
          <h1 className="text-4xl uppercase font-changa lg:text-5xl">
            Contact
          </h1>
          <div className="flex flex-row">
            {/* <IoLocationSharp /> */}
            <h1 className="text-3xl font-changa mt-6 lg:text-4xl">Location</h1>
          </div>
          <h1 className="text-2xl font-changa mt-2 lg:text-3xl text-gold">
            252 Reid Street, Quesnel, BC, Canada V2J 2M3
          </h1>
          <h1 className="text-3xl font-changa mt-6 lg:text-4xl">Call Us</h1>
          <h1 className="text-2xl font-changa mt-2 lg:text-3xl text-gold">
            (236) 424 - 1111
          </h1>
          <h1 className="text-3xl font-changa mt-6 lg:text-4xl">
            Reach Us On Social
          </h1>
          <h1 className="text-2xl font-changa mt-2 lg:text-3xl text-gold">
            Pure Spice
          </h1>
        </div>
      </div>
    </div>
  );
};

export default contact;
