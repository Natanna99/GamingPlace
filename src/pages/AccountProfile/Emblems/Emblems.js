import "./Emblems.css";
import imageAventureira from "../../../assets/svg/aventureira.svg";
import imageDetetive from "../../../assets/svg/detetive.svg";
import imageDinheiro from "../../../assets/svg/dinheiro.svg";

export function Emblems() {
  return (
    <div className="boxEmblem">
      <div className="spacingPageEmblems">
        <div className="boxProfileEmblem">
          <div className="titleEmblem">
            <h5 className="">Emblemas</h5>
          </div>
          <div className="divEmblems">
            <img src={imageAventureira} className="sizeBoxEmblem" alt="" />
            <img src={imageDetetive} className="sizeBoxEmblem" alt="" />
            <img src={imageDinheiro} className="sizeBoxEmblem" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
