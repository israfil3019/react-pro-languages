import React, { useEffect } from "react";
import logo from "./react.svg";
import { categories } from "../../helper/data";
import Cards from "./Cards";
import "./Cards.scss";

export default function Card() {
  useEffect(
    () =>
      (document.querySelector(".react-image").className =
        "react-image-reverse"),
    []
  );

  return (
    <div>
      <img src={logo} alt="react-logo" className="react-image" />
      <div className="card-div">
        <h2>Languages</h2>
        <div className="small-card-div">
          {categories.map((front) => (
            <Cards
              name={front.name}
              img={front.img}
              options={front.options}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
