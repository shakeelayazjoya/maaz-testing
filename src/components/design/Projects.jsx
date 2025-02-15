import React, { useState } from "react";
import { check } from "../../assets";
import { pricing } from "../../constants";
import ContactUsModal from "../ContactUsModal";

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Our Projects </h1>

        <div className="flex gap-[1rem] max-lg:flex-wrap">
          {pricing.map((item) => (
            <div
              key={item.id}
              className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 cursor-pointer" // Add cursor-pointer for better UX
              onClick={handleOpenModal}
            >
              <div className="flex items-center justify-center w-3/2 p-5 bg-white border border-gray-300 shadow-md">
                <img
                  src={item.image} // Use item.image to display the correct image
                  alt="Sample"
                  className="w-full h-48 object-cover" // Apply consistent styling
                />
              </div>

              <h4 className="h4 mb-4">{item.title}</h4>

              <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                {item.description}
              </p>

              <ul>
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start py-5 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Render the ContactUsModal */}
      <ContactUsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        top="25px"
      />
    </>
  );
};

export default Projects;
