import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import HeroBG from "/src/assets/images/heroBG.jpg";

function Hero() {
  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${HeroBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue overlay with 50% opacity */}
      <div className="absolute inset-0 bg-customNavy-60 opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex w-4/5 justify-center pt-32 md:pt-48 mx-auto">
        <div className="absolute flex flex-col w-full justify-center">
          <p className="font-bold text-center text-xl lg:text-2xl text-customGold-50 py-2 lg:py-5">
            WELCOME TO
          </p>
          <h1 className="text-white text-center font-black text-2xl md:text-5xl lg:text-7xl">
            LANDRICH INTEGRATED COMPANY LIMITED
          </h1>
          <div className="flex justify-center items-center mt-40">
            <div className="btnWrapper flex flex-col md:flex-row lg:flex-row justify-center items-center">
              <Link to="/about">
                <Button className="text-white bg-gradient-to-r from-customBlue-30 via-customBlue-40 to-customNavy-60 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                  <span className="text-2xl text-center uppercase">
                    Learn More
                  </span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="text-white border-2 bg-transparent border-white px-5 py-2.5 text-center me-2 mb-2 rounded-full hover:!bg-customGold-50 hover:border-transparent ">
                  <span className="text-2xl text-center uppercase">
                    Contact Us
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
