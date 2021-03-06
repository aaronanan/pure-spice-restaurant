import React from "react";
import Header from "../components/Header";
import spoonspice2 from "../assets/spoonspice2.jpg";
import Image from "next/image";
import { IoLocationSharp, IoCallSharp, IoLogoFacebook } from "react-icons/io5";
import Footer from "../components/Footer";
import Head from "next/head";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact - Pure Spice</title>
        <meta name="description" content="Pure Spice Restuarant Contact" />
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
          <h1 className="text-4xl uppercase font-changa lg:text-5xl">
            Contact
          </h1>
          <div className="flex flex-row mt-6">
            <IoLocationSharp size={32} className="mr-1" />
            <h1 className="text-3xl font-changa">Location</h1>
          </div>

          <h1 className="text-2xl font-changa mt-2  text-gold ml-9">
            252 Reid Street, Quesnel, BC, Canada V2J 2M3
          </h1>

          <div className="flex flex-row mt-8 items-center">
            <IoCallSharp size={32} className="mr-1" />
            <h1 className="text-3xl font-changa">Call Us</h1>
          </div>
          <h1 className="text-2xl font-changa mt-2  text-gold ml-9">
            (236) 424 - 1111
          </h1>
          <div className="flex flex-row mt-8 items-center">
            <IoLogoFacebook size={32} className="mr-2" />
            <h1 className="text-3xl font-changa">Reach Us On Social</h1>
          </div>
          <a href="https://www.facebook.com/Pure252/" target="_blank">
            <h1 className="text-2xl font-changa mt-2 text-gold ml-10 font-medium underline">
              Pure Spice
            </h1>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
