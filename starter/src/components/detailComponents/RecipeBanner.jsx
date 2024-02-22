import React from "react";
import "../../App.css";

const RecipeBanner = ({ image, title }) => {
  const backgroundString = `url(${image})`;

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), ${backgroundString}`,
  };

  return (
    <div>
      <div style={backgroundStyle}>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default RecipeBanner;
