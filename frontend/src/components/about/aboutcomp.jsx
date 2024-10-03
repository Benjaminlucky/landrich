import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Aboutcomp() {
  return (
    <div className="aboutWrapper w-4/5 flex  justify-center  mx-auto">
      <div className="innerWrapper flex flex-col md:flex-col lg:flex-row w-full justify-center  gap-10 py-20 md:py-20 lg:py-40">
        <div className="aboutLeft flex-1">
          <div className="ablContent font-bold text-center lg:text-left  text-balance text-4xl md:text-5xl lg:text-5xl py-5 md:py-5 lg:py-10">
            <h2 className="text-customBlue-50">
              We aim to <span className="text-customGold-50">Redefine</span> the
              landscape of Real Estate Development
            </h2>
          </div>
        </div>
        <div className="aboutRight flex-1">
          <div className="arContent">
            <p className="text-xl text-balance leading-relaxed text-justify">
              Landrich Integrated Company Limited is a premier real estate
              property development firm located in the vibrant Ibeju Lekki Epe
              corridor of Lagos State, Nigeria. Founded on the principles of
              integrity, innovation, and excellence, we aim to redefine the
              landscape of real estate development. With a commitment to quality
              and sustainability, we are at the forefront of providing
              exceptional residential and commercial properties that meet the
              diverse needs of our clients.
            </p>
            <div className="relative flex justify-center lg:justify-start mt-10 mx-auto">
              <Link to="/about" className="relative">
                <button className="bg-customNavy-60 text-white rounded-full px-8 py-3 font-medium hover:bg-customNavy-80 hover:shadow-lg transition duration-300 ease-in-out">
                  <span className="mr-5">Learn More</span>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2">
                    <div className="bg-customGold-60 mr-1 rounded-full p-2.5 flex justify-center items-center">
                      <FaArrowRight className="text-customNavy-60 " />
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutcomp;
