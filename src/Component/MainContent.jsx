import React from "react";
import trans from "../assets/Group 186.png";
import tick from "../assets/Group 1.png";
import images from "../assets/Group 12.png";
import image from "../assets/Group 187.png";
import review from '../assets/Group 22.png';
import man from '../assets/Rectangle 26.png'

const MainContent = () => {
  return (
    <div className=" w-screen h-[100vh] flex flex-wrap  justify-around align-middle items-center mt-[6rem]">
      <img src={trans} alt="" />

      <div className="w-[20%] h-[70%] flex flex-col items-start justify-evenly gap-2">
        <b className="text-[#ff5a05]">Lorem ipsum dolor sit ame</b>
        <h1 className="font-bold text-4xl text-black">
          Simple Solutions for Complex Connections
        </h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
          gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi
          odio a velit feugiat sapien.
        </p>
        <span>
          <img src={tick} alt="" />
          <b>High Analysis</b>
        </span>
        <span>
          <img src={tick} alt="" />
          <b>Certified Institute</b>
        </span>
        <button className="w-24 h-8 bg-[#ff5a05] text-[.7rem] rounded-md text-white">
          Learn More
        </button>
      </div>
      <div>
        <img src={images} alt="" />
      </div>

      <div className=" w-screen  bg-[#f7e4d9] flex justify-center items-center pt-10">
        <img src={image} alt="" />
      </div>

      <div className="h-[100%] text-center  ">
        <h1 className="font-bold text-4xl text-black">User’s Review</h1>
        <p className="">Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow</p>

        <div className="flex flex-row justify-around">
          <h1 className="font-bold text-4xl text-black">What People Say About Us</h1>
          <img src={review} alt="" />
          <img src={man} alt="" />
        

        </div>
      </div>
    </div>
  );
};

export default MainContent;
