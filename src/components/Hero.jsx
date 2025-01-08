import React, { useState } from "react";
import headerone from "../assets/headerone.jpg";
import headertwo from "../assets/headertwo.jpg";
import headerthree from "../assets/headerthree.jpg";
import headerfour from "../assets/headerfour.jpg";

const Hero = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (imageId) => {
    setHoveredImage(imageId); // Set the hovered image ID
  };

  const handleMouseLeave = () => {
    setHoveredImage(null); // Reset when mouse leaves
  };

  // Inline styles
  const styles = `
  .image-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
  }
  
  .default-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 5rem;
    font-weight: bold;
    z-index: 1;
    transition: opacity 0.3s ease, text-shadow 0.3s ease;
    opacity: 0.8;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
    text-align: center;
    pointer-events: none; /* Prevent hover on text */
  }

  .image-wrapper {
    position: relative;
    flex: 1;
    overflow: hidden;
    transition: flex 0.5s ease;
    transform: rotate(5deg);
    margin: -1px;
  }

  .image-wrapper:hover {
    flex: 7;
    transform: rotate(0deg);
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2rem;
    display: none;
  }

  .image-wrapper:hover .overlay {
    display: block;
    color: black;
  }

  /* Responsive styles */
  @media (max-width: 1024px) {
    .default-overlay {
      font-size: 3rem;
    }

    .image-container {
      flex-direction: column; /* Stack images vertically */
    }

    .image-wrapper {
      flex: 1;
      transform: none; /* Disable rotation on smaller screens */
    }

    .image-wrapper:hover {
      flex: 1; /* Prevent resizing on hover for tablets */
    }
  }

  @media (max-width: 768px) {
    .default-overlay {
      font-size: 2rem;
    }

    .image-container {
      height: auto; /* Adjust height for mobile */
    }

    .image-wrapper {
      flex: 1;
      transform: none; /* No rotation for mobile */
      margin: 0; /* Remove margin for better fit */
    }

    .image-wrapper:hover {
      flex: 1; /* Prevent hover effects for mobile */
    }

    .overlay {
      font-size: 1.5rem; /* Smaller overlay text */
    }
  }
`;

  // Inject styles into the document head
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  const getOverlayText = () => {
    switch (hoveredImage) {
      case 1:
        return "MAIN DEMO";
      case 2:
        return "STUDIO DEMO";
      case 3:
        return "GAMER DEMO";
      case 4:
        return "BLOGGER ";
      // Default text when no image is hovered
    }
  };

  return (
    <div className="image-container">
      <div className="default-overlay">
        <h2 className="default-heading">{getOverlayText()}</h2>
      </div>
      <div
        className="image-wrapper"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={headerone} alt="Image 1" className="image" />
        <div className="overlay"></div>
      </div>
      <div
        className="image-wrapper"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={headertwo} alt="Image 2" className="image" />
        <div className="overlay"></div>
      </div>
      <div
        className="image-wrapper"
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={headerthree} alt="Image 3" className="image" />
        <div className="overlay"></div>
      </div>
      <div
        className="image-wrapper"
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={headerfour} alt="Image 4" className="image" />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
