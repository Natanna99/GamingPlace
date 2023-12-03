import "./RewardCollected.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageAventureira from "../../../../assets/svg/aventureira.svg";
import { Coins } from "lucide-react";

export function RewardCollected({ modalOpenReward, setModalOpenReward }) {
  return (
    <>
      <div>
        <div className="overlayCardReward"></div>
        <div className="cardReward">
          <div className="buttonCloseModalCard">
            <i
              className="iconeCloseModalProfile"
              onClick={() => {
                setModalOpenReward(false);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </i>
          </div>

          <div className="bodyReward">
            <h4 className="textCongratulations">Parabéns!</h4>
            <h4 className="textCongratulations">Recompensa coletada</h4>
            <div className="typeReward">
              <img src={imageAventureira} alt="" />
              <p className="infoTypeReward">Pontos conquistados:</p>
              <p className="infoTypeReward">
                <Coins className="itensIcone infoTypeReward" />
                40
              </p>
            </div>
            <div className="divButtonReward">
              <a href="/Profile">
                <button className="buttonRedirectReward">Ver conquistas</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
