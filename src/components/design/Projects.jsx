import React from "react";
import pone from "../../assets/pone.jpg";
import ptwo from "../../assets/ptwo.jpg";
import pthree from "../../assets/pthree.jpg";

const Projects = () => {
  return (
    <div className="container mx-auto py-3 my-7">
      <h1 className="text-xl font-bold py-2">Our Projects</h1>
      <div className="flex gap-4 h-96">
        <div className="relative w-1/3">
          <img
            src={pone}
            alt="Project One"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="relative w-1/3">
          <img
            src={ptwo}
            alt="Project Two"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="relative w-1/3">
          <img
            src={pthree}
            alt="Project Three"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
