import React, { useState } from "react";

export default function Cards({ name, img, options }) {
  const [flip, setFlip] = useState(true);

  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <div>
      <div className="small-cards" onClick={handleClick}>
        {flip ? (
          <div>
            <div className="image-div">
              <img className="images" src={img} alt={name} />
            </div>
            <p className="title"> {name} </p>
          </div>
        ) : (
          <div className="scripts">
            <ul>
              {options.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
