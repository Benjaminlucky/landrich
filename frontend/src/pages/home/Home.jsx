import React from "react";
import Hero from "../../components/hero/Hero";
import Aboutcomp from "../../components/about/aboutcomp";

function Home() {
  return (
    <div className="homeWrapper">
      <div className="heroSection">
        <Hero />
      </div>
      <div className="aboutSection bg-white w-full flex">
        <Aboutcomp />
      </div>
    </div>
  );
}

export default Home;
