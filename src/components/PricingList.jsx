import { check } from "../assets";
import { pricing } from "../constants";
import { useNavigate } from "react-router-dom";

const PricingList = () => {
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/pricing/${id}`); // Redirects to a dynamic route based on the item's ID
  };

  return (
    <>
      <div>
        <div className="flex gap-[1rem] max-lg:flex-wrap">
          {pricing.map((item) => (
            <div
              key={item.id}
              onClick={() => handleRedirect(item.id)} // Add onClick handler
              className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 cursor-pointer" // Add cursor-pointer for better UX
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
    </>
  );
};

export default PricingList;
