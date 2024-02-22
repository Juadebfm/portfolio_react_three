import React from "react";
import profile from "../assets/profile.png";
import { LiaHandPeace } from "react-icons/lia";
import { IoDownloadOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className=" h-screen pt-40">
      <div className="w-[45%] flex flex-col items-center justify-center mx-auto gap-7">
        <img src={profile} alt="My person" className="w-[100px] h-[100px]" />
        <div className="flex items-center">
          <span>Hi!, I'm Mia</span>{" "}
          <LiaHandPeace className="text-orange-300 ml-2" />
        </div>
        <h1 className="text-[42px] w-[60%] text-center leading-tight">
          Website design, app, and developer.
        </h1>
        <p className="w-[45%] text-center capitalize">
          a junior UI and Web Designer. I specialize in UI design, responsive
          web design and visual development.
        </p>
        <div className="flex items-center justify-center gap-8">
          <button className="w-[138px] h-[51px] bg-black rounded-3xl text-white">Hire Me</button>
          <button className="flex items-center gap-2">
            <span>
              <IoDownloadOutline />
            </span>
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
