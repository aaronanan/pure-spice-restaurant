import React from "react";
import Header from "../components/Header";
import spoonspice2 from "../assets/spoonspice2.jpg";
import Image from "next/image";
import Footer from "../components/Footer";
import Head from "next/head";

import { IoCalendar, IoNotifications, IoReader } from "react-icons/io5";

const buffet = () => {
  return (
    <div>
      <Head>
        <title>Buffet - Pure Spice</title>
        <meta name="description" content="Pure Spice Restuarant Buffet" />
        <link rel="icon" href="/spice.png" />
      </Head>
      <Header />
      <div className="relative pb-1 md:pb-0">
        <div className="backgroundSpoonSpice h-screen opacity-80" />

        <div className="absolute top-5 left-2 text-white px-2 md:left-1/3 lg:left-1/2 xl:left-2/3 md:pr-10 m-5">
          <h1 className="text-4xl uppercase font-changa lg:text-5xl">Buffet</h1>
          <div className="flex flex-row items-center mt-6">
            <IoCalendar size={32} className="mr-2" />
            <h1 className="text-2xl md:text-3xl font-changa">Schedule</h1>
          </div>
          <h1 className="text-xl md:text-2xl font-changa mt-2 text-gold ml-10">
            Pure Spice will be starting a lunch buffet occaasionly through each
            week at 11 am - 3 pm.
          </h1>
          <div className="flex flex-row items-center mt-6">
            <IoNotifications size={32} className="mr-2" />
            <h1 className="text-2xl md:text-3xl font-changa">Service</h1>
          </div>
          <h1 className="text-xl md:text-2xl font-changa mt-2 text-gold ml-10">
            There will be two options for the service. Dine in at $17 or a take
            out box at $16.
          </h1>
          <div className="flex flex-row items-center mt-6">
            <IoReader size={32} className="mr-2" />
            <h1 className="text-2xl md:text-3xl font-changa">Description</h1>
          </div>
          <h1 className="text-xl md:text-2xl font-changa mt-2 text-gold ml-10">
            The buffet will consist of 3 vegetarian curries and 2 meat curries
            that will vary based on the chef’s decision. These curries will be
            paired with vegetaable pakoras, rice, roti, and papadam. <br />
            <br />
            We suggest you{" "}
            <a
              href="https://www.facebook.com/Pure252/"
              target="_blank"
              className="underline font-semibold"
            >
              reach us
            </a>{" "}
            to ensure what will be in the buffet for the day.
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default buffet;
