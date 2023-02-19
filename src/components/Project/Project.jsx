import React from "react";
import { Projects } from "./Projects";

const Project = () => {
  return (
    <div className="w-full h-auto py-6">
      <div className="w-full h-auto py-8 flex flex-col items-center">
        <h2 className="text-3xl py-2 md:text-4xl lg:text-[42px]">Projects</h2>
        <hr className="w-2/5 h-[3px] bg-gray-800 md:w-1/5"/>
      </div>


      <div className="w-full h-auto flex flex-col gap-4 md:flex-wrap md:flex-row lg:gap-2">
      {Projects.map((item) => {
        return (
          <div className="w-[370px] h-[326.22px] p-3 mx-auto rounded-2xl overflow-hidden shadow-2xl lg:w-[394px] lg:h-[350px]">
            <a href={item.link} target="_blank">
              <img
                key={item.id}
                src={item.img}
                alt="logo"
                className="w-[346px] h-[238.22px] shadow-xl rounded-xl lg:w-[370px] lg:h-[262.22px]"
              />
            </a>
            <div className="h-auto py-2">
              <h4 className="font-semibold text-base">Name: {item.title}</h4>
              <p className="font-bold">Project No: {item.Num}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Project;
