import React from "react";
import "./about.css";
import { about } from "../../data";

function About() {
  return (
    <main>
      <div className="innerWrapper w-full">
        <div className="content w-4/5 mx-auto text-white">
          <div className="aboutSection w-full flex flex-col py-20 justify-center mx-auto">
            <div className="aboutContent flex justify-center py-10">
              <h2 className="text-xl lg:text-4xl w-5/6 lg:w-2/4 leading-tight text-center font-bold uppercase">
                We aim to <span className="text-customGold-50">Redefine</span>{" "}
                the landscape of Real Estate Development
              </h2>
            </div>
            <div className="leading w-full mx-auto">
              <p className="text-center text-sm text-gray-400">
                Landrich Integrated Company Limited is a premier real estate
                property development firm located in the vibrant Ibeju Lekki Epe
                corridor of Lagos State, Nigeria. Founded on the principles of
                integrity, innovation, and excellence, we aim to redefine the
                landscape of real estate development. With a commitment to
                quality and sustainability, we are at the forefront of providing
                exceptional residential and commercial properties that meet the
                diverse needs of our clients.
              </p>
            </div>
            {/* content for vision, mission and values goes here */}
            <div className="missionSection flex mt-12">
              <div className="missionWrapper flex flex-col lg:flex-row gap-7">
                {about.map((about, index) => (
                  <div
                    className="about flex flex-col text-black   items-center text-center "
                    key={index}
                  >
                    <div className="aboutinner rounded-sm bg-white border-8 border-transparent hover:border-white">
                      <div className="aboutTop text-customNavy-100 bg-white py-3  text-2xl font-extrabold">
                        {about.title}
                      </div>
                      <div className="aboutBottom p-5 bg-customGold-30 text-center text-balance">
                        {about.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/** content for vision, mission and values ends here */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
