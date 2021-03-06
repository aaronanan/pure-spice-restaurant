import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";

import spoonspice2 from "../assets/spoonspice2.jpg";

const about = () => {
  return (
    <div className="">
      <Head>
        <title>About - Pure Spice</title>
        <meta name="description" content="Pure Spice Restuarant About" />
        <link rel="icon" href="/spice.png" />
      </Head>
      <Header />
      <div className="relative pb-1 md:pb-0">
        <div className="backgroundSpoonSpice h-screen opacity-80" />
        {/* <div className="md:hidden">
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
        </div> */}
        <div className="absolute top-10 left-2 text-white px-2 md:left-1/3 lg:left-1/2 xl:left-2/3 md:pr-10 m-5">
          <h1 className="text-4xl uppercase font-changa lg:text-5xl">About</h1>
          <h1 className="text-3xl uppercase font-changa mt-6 lg:text-4xl lg:leading-loose">
            The Founder
          </h1>
          <p className="text-gold text-lg md:text-xl lg:text-2xl lg:line-loose font-changa">
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

      <Footer />
    </div>
  );
};

export default about;
