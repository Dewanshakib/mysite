import React from "react";
import { Icon } from "./icon";

const Intro = () => {
  return (
    <div>
      <div className="w-full h-auto text-center px-10">
        <h2 className="text-2xl text-gray-900 font-semibold leading-10 pt-40 py-4 md:text-3xl lg:text-4xl">
          "Welcome to my portfolio! I am Dewan Shakib"
        </h2>
        <p className="text-lg text-gray-800 font-normal leading-8 py-4 md:max-w-[627px] md:mx-auto md:text-[18px] lg:text-xl">
          I am a Developer with a passion for web development.I enjoy to write
          code.My speciality is to satisfy every customer desired wish.
        </p>
      </div>

      <div className="w-full h-auto py-10">
        <img
          src="./Avatar.jpg"
          alt="avatar"
          className="w-80 h-auto bg-cover mx-auto rounded-full "
        />
      </div>

      <div className="w-full flex flex-row justify-between h-auto px-16 py-6 md:px-20 lg:px-24">
        {Icon.map((item) => {
          return (
            <div className="">
              <a href={item.link}>
                <img src={item.img} alt="icons" className="transfo
                 transition-all delay-600 hover:scale-110 md:w-[50px] lg:w-[60px]" />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Intro;
