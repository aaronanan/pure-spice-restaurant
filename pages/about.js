import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

import spoonspice2 from "../assets/spoonspice2.jpg";

const about = () => {
  return (
    <div className="">
      <Header />
      <div className="relative pb-1 md:pb-0">
        <div className="md:hidden">
          <Image
            src={spoonspice2}
            height={900}
            width={600}
            className="opacity-60"
            priority={true}
          />
        </div>
        <div className="hidden md:block">
          <Image src={spoonspice2} className="opacity-60" />
        </div>
        <div className="absolute top-10 left-2 text-white px-2 md:left-1/2 lg:left-2/3">
          <h1 className="text-4xl uppercase font-changa lg:text-5xl">About</h1>
          <h1 className="text-3xl uppercase font-changa mt-6 lg:text-4xl lg:leading-loose">
            The Founder
          </h1>
          <p className="text-gold text-lg font-medium lg:text-2xl lg:line-loose">
            Aruntha, a successful Tamil mother, entrepreneur, and Chef has been
            running restaurants throughout Northern British Columbia after
            leaving her home. Coming from Sri Lanka, Aruntha has faced and
            triumphed adversity and struggle to become successful. Through the
            years of difficulty, she is now known for her upbeat and kind
            personality, as well as, her delicious food. She is proud to provide
            traditional Sri Lankan and South Indian dishes.
          </p>
        </div>
      </div>
      <div className="md:h-40 lg:h-0"></div>

      <Footer />
    </div>
  );
};

export default about;
