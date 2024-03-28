import React from "react";
import "../assets/css/hero.css";
import heroBG from "../assets/images/hero_bg.png";
import { FaArrowRight, FaPlay } from "react-icons/fa";
// import MySvgComponent from "./MySvg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="col-1">
          <p id="fancy-btn">Create your own</p>
          <h3>Make the most of your printing</h3>
          <p>
            What’s more, we do it right! A full administration printing
            background. Print shirts for yourself or your online business
          </p>
          {/* <MySvgComponent /> */}
          <div className="hero-btn">
            <button type="button">
              Shop Now <FaArrowRight />
            </button>
            <p>
              How we work <FaPlay />
            </p>
          </div>
          <div className="stats">
            <div className="stats1">
              <h3>4K+</h3>
              <p>Collections</p>
            </div>
            <div className="stats2">
              <h3>9K+</h3>
              <p>Items trusted to deliver</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <img src={heroBG} alt="heroBG" height={"500px"} width={"550px"} />
        </div>
      </div>
    </>
  );
};

export default Hero;
