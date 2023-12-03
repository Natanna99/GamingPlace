import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import "./ModalInfoGame.css";
import { Gift } from "lucide-react";

export default function ModalInfoGame({
  modalInfo,
  setModalInfo,
  infoCard,
  setModalReward,
}) {
  return (
    <>
      <Modal
        show={modalInfo}
        onHide={setModalInfo}
        backdrop="static"
        keyboard={false}
        id="modalInfo"
      >
        <Modal.Body>
          <div className="buttonCloseModalCard">
            <i
              className="iconeCloseModalProfile"
              onClick={() => {
                setModalInfo(false);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </i>
          </div>
          <div className="imageContainer">
            <img
              src={process.env.PUBLIC_URL + "/img/" + infoCard?.image}
              alt="Descrição da imagem"
              id="imageInfoGame"
            />
            <div className="gradient-overlay"></div>
          </div>
          <div className="bodyModalInfo">
            <div className="divInfoModal">
              <h2 className="titleInfoModal">{infoCard?.titulo}</h2>
              <p className="modalInfoDescripition">{infoCard?.descricao}</p>
              <h2 className="titleInfoModal">Desenvolvedores do Jogo</h2>
              <div className="modalInfoDev">
                {infoCard?.dev &&
                  infoCard?.dev?.map((infoDev) => (
                    <div className="infoDevProfile">
                      <img
                        src={process.env.PUBLIC_URL + "/img/" + infoDev?.imagem}
                        alt=""
                        className="devFrame"
                      />
                      <div>
                        <h5 className="nameDev">{infoDev?.nome}</h5>
                        <h6 className="locationDev">{infoDev?.location}</h6>
                      </div>
                    </div>
                  ))}
                <div>
                  <button className="buttonPlayNow">Jogue agora!</button>
                </div>
              </div>
              <div className="collectReward">
                <button
                  className="buttonCollectReward"
                  onClick={() => setModalReward()}
                >
                  <Gift />
                  Coletar recompensa
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
