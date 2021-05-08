import logo from "./react.svg";
import Cards from "./Cards";
import "./Cards.scss";

export default function CardContainer() {

  return (
    <div>
      <img src={logo} alt="react-logo" className="react-image" />

      <div className="card-div">
        <div className="small-card-div">
         
            <Cards/>

        </div>
      </div>
    </div>
  );
}
