import React from "react";
import background from "../assets/background.jpg";
import spoonspice from "../assets/spoonspice.jpg";
import spoon from "../assets/spoon.jpg";
import butterchicken from "../assets/butterchicken.png";
import Image from "next/image";

const Main = () => {
  return (
    <div className="pb-60">
      <div className="relative">
        <Image
          src={background}
          alt="Picture of the author"
          className="bg-auto opacity-90"
          priority={true}
        />
        <div className="absolute xl:top-96 xl:left-72 lg:top-80 lg:left-40 md:top-72 md:left-32 sm:top-52 sm:left-20 top-20 left-7">
          {/* <div className="absolute top-96 left-48"> */}
          <h1 className="md:text-5xl text-logo font-bold text-3xl font-bubblegum">
            Pure Spice
          </h1>
          <h2 className="md:text-2xl text-xl text-logo font-bold font-bubblegum">
            Sri Lankan & South Indian Cuisine
          </h2>
          <div className="flex flex-row justify-between">
            <input
              type="button"
              value="Order Pick Up"
              className="md:w-36 md:h-10 w-28 h-8 font-bold text-md mt-5 bg-pickup hover:bg-pickup-dark font-changa"
            />
            <input
              type="button"
              value="Delivery"
              className="md:w-32 md:h-10 w-28 h-8 font-semibold text-md mt-5 bg-transparent border-4 text-white border-gold hover:border-gold-dark hover:bg-gold-dark font-changa"
              // style={{ borderColor: "#A88544" }}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center text-gold font-medium font-changa mt-16">
          Great authenic food made with love and joy
        </h1>
        <div className="mx-10 mt-10">
          <Image
            src={butterchicken}
            alt="Picture of the author"
            className="rounded-2xl"
            priority={true}
          />
        </div>
        <input
          className="md:w-60 md:h-16 w-52 h-14 bg-blood hover:bg-blood-dark rounded-full text-white font-changa font-semibold text-2xl mx-auto block mt mt-6"
          value="Our Menu"
          type="button"
        />
      </div>
      <div>
        <h1 className="text-white text-4xl text-center font-medium font-changa mt-20">
          Taste that comes from true honest hard <br /> work and experience
        </h1>
        <div className="mx-10 mt-10">
          <Image
            src={spoonspice}
            alt="Picture of the author"
            className="opacity-50 rounded-2xl"
            priority={true}
          />
        </div>
        <input
          className="md:w-60 md:h-16 w-52 h-14 bg-blood hover:bg-blood-dark rounded-full text-white font-changa font-semibold text-2xl mx-auto block mt mt-6"
          value="About"
          type="button"
        />
      </div>
      <div className="flex flex-row justify-around mt-16 lg:px-20 md:px-12 px-5">
        <div className="md:w-1/2">
          <h1 className="text-white xl:text-3xl lg:text-3xl md:text-2xl text-xl font-medium font-changa mt-20 xl:leading-loose lg:leading-loose md:leading-loose leading-loose">
            We provide private dining for certain lunch & dinner paarties.
            Hospitality and happiness are two things we do right.
          </h1>
          <input
            className="md:w-60 md:h-16 w-52 h-14 bg-blood hover:bg-blood-dark rounded-full text-white font-changa font-semibold text-2xl lg:mt-16 mt-10 mx-auto block"
            value="Contact Us"
            type="button"
          />

          <h1 className="text-white lg:text-4xl text-3xl font-medium font-changa lg:mt-40 mt-20">
            Hours of Operation
          </h1>
          <p className="lg:text-xl text-md text-white font-changa font-medium">
            Tuesday - Wednesday 4:00 pm - 9:00 pm
          </p>
          <p className="lg:text-xl text-md text-white font-changa font-medium">
            Thursday - Saturday 11:00 am - 9:00 pm
          </p>
          <p className="lg:text-xl text-md text-white font-changa font-medium">
            Sunday 12:00 pm - 8:00 pm
          </p>
          <p className="lg:text-xl text-md text-white font-changa font-medium">
            Monday Closed
          </p>
        </div>
        <div className="mx-10 mt-10 hidden md:block">
          <Image
            src={spoon}
            alt="Picture of the author"
            width={500}
            height={800}
            className="opacity-60"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
