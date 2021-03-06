import React from "react";
import background from "../assets/background.jpg";
import spoonspice from "../assets/spoonspice.jpg";
import spoon from "../assets/spoon.jpg";
import butterchicken from "../assets/butterchicken.jpg";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="pb-60">
      <div className="relative">
        {/* <Image
          src={background}
          alt="Picture of the author"
          className="bg-auto opacity-90"
          priority={true}
        /> */}
        <div
          className="backgroundHome opacity-80 md:hidden"
          style={{ height: "60vh" }}
        />
        <div
          className="backgroundHome opacity-80 hidden md:block"
          style={{ height: "90vh" }}
        />
        <div className="absolute xl:top-96 xl:left-72 lg:top-80 lg:left-40 md:top-72 md:left-32 sm:top-52 top-1/2 left-12">
          {/* <div className="absolute top-96 left-48"> */}
          <h1 className="md:text-5xl text-logo font-bold text-3xl font-bubblegum">
            Pure Spice
          </h1>
          <h2 className="md:text-2xl text-xl text-logo font-bold font-bubblegum md:tracking-widest tracking-wide">
            Sri Lankan & South Indian Cuisine
          </h2>
          <div className="flex flex-row justify-between">
            <input
              type="button"
              value="Order Pick Up"
              className="md:w-44 md:h-12 w-32 h-10 font-bold md:text-lg text-md mt-5 bg-pickup hover:bg-pickup-dark font-changa"
              data-glf-cuid="fa39485d-e1d6-4091-9af3-854a6ae77878"
              data-glf-ruid="b6eed492-d82a-45d2-bff4-5a58bb0b97e6"
            />

            {/* <span
              class="md:w-44 md:h-12 w-32 h-10 font-bold md:text-lg text-md mt-5 bg-pickup hover:bg-pickup-dark font-changa text-center"
              data-glf-cuid="fa39485d-e1d6-4091-9af3-854a6ae77878"
              data-glf-ruid="b6eed492-d82a-45d2-bff4-5a58bb0b97e6"
            >
              Order Pick Up
            </span> */}
            <a href="https://www.spyce.ca/" target="_blank">
              <input
                type="button"
                value="Delivery"
                className="md:w-44 md:h-12 w-32 h-10 font-semibold md:text-lg text-md mt-5 bg-transparent border-4 text-white border-gold hover:border-gold-dark hover:bg-gold-dark font-changa"
                // style={{ borderColor: "#A88544" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl text-center text-gold font-medium font-changa mt-16">
          Great authenic food made with love and joy
        </h1>
        <div className="md:mx-10 mt-10 mx-2">
          <Image
            src={butterchicken}
            alt="Picture of the author"
            className="rounded-2xl opacity-50"
            priority={true}
          />
        </div>
        <Link href="/menu">
          <input
            className="md:w-60 md:h-16 w-52 h-14 bg-blood hover:bg-blood-dark rounded-full text-white font-changa font-semibold text-2xl mx-auto block mt mt-6"
            value="Our Menu"
            type="button"
          />
        </Link>
      </div>
      <div>
        <h1 className="text-white text-3xl md:text-4xl text-center font-medium font-changa mt-20">
          Taste that comes from true honest hard work and experience
        </h1>
        <div className="md:mx-10 mt-10 mx-2">
          <Image
            src={spoonspice}
            alt="Picture of the author"
            className="opacity-50 rounded-2xl"
            priority={true}
          />
        </div>
        <Link href="/about">
          <input
            className="md:w-60 md:h-16 w-52 h-14 bg-blood hover:bg-blood-dark rounded-full text-white font-changa font-semibold text-2xl mx-auto block mt mt-6"
            value="About"
            type="button"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-around mt-16 lg:px-20 md:px-12 px-5">
        <div className="md:w-1/2">
          <h1 className="text-white xl:text-3xl lg:text-3xl md:text-2xl text-xl font-medium font-changa mt-20 xl:leading-loose lg:leading-loose md:leading-loose leading-loose">
            We provide private dining for certain lunch & dinner parties.
            Hospitality and happiness are two things we do right.
          </h1>
          <Link href="/contact">
            <input
              className="md:w-60 md:h-16 w-52 h-14 bg-blood hover:bg-blood-dark rounded-full text-white font-changa font-semibold text-2xl lg:mt-16 mt-10 mx-auto block"
              value="Contact Us"
              type="button"
            />
          </Link>

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
