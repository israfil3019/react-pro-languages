import dummyImg from "../../assets/js.png"

export default function Cards() {
  
  return (
    <div>
      <div className="small-card" >
          <div>
            <div className="image-div">
              <img className="images" src={dummyImg} alt="" />
            </div>
            <p className="title"> Js </p>
          </div>
      </div>
    </div>
  )
}
