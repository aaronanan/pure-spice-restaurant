import React from "react";
import Header from "../components/Header";
import spoonspice2 from "../assets/spoonspice2.jpg";
import Image from "next/image";
import Footer from "../components/Footer";

const buffet = () => {
  return (
    <div>
      <Header />
      <div className="relative pb-1 md:pb-0">
        <div className="backgroundSpoonSpice h-screen opacity-80" />

        <div className="absolute top-5 left-2 text-white px-2 md:left-1/3 lg:left-1/2 xl:left-2/3 md:pr-10 m-5">
          <h1 className="text-4xl uppercase font-changa lg:text-5xl">Buffet</h1>
          <div className="flex flex-row">
            {/* <IoLocationSharp /> */}
            <h1 className="text-2xl md:text-3xl font-changa mt-6">Schedule</h1>
          </div>
          <h1 className="text-xl md:text-2xl font-changa mt-2 text-gold">
            Pure Spice will be starting a lunch buffet occaasionly through each
            week at 11 am - 3 pm.
          </h1>
          <h1 className="text-2xl md:text-3xl font-changa mt-6">Service</h1>
          <h1 className="text-xl md:text-2xl font-changa mt-2 text-gold">
            There will be two options for the service. Dine in at $17 or a take
            out box at $16.
          </h1>
          <h1 className="text-2xl md:text-3xl font-changa mt-6">Description</h1>
          <h1 className="text-xl md:text-2xl font-changa mt-2 text-gold">
            The buffet will consist of 3 vegetarian curries and 2 meat curries
            that will vary based on the chef’s decision. These curries will be
            paired with vegetaable pakoras, rice, roti, and papadam. <br />
            <br />
            We suggest you reach us to ensure what will be in the buffet for the
            day.
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default buffet;
