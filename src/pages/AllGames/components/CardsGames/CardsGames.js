import { Users } from "lucide-react";
import "./CardsGames.css";
import { useState } from "react";
import ModalInfoGame from "../../../../components/ModalInfoGame/ModalInfoGame";
import { RewardCollected } from "../../../../components/ModalInfoGame/components/RewardCollected/RewardCollected";

export function CardsGames({ listCards }) {
  const [modalInfoCard, setModalInfoCard] = useState(null);
  const [modalReward, setModalReward] = useState(null);

  const openModalInfoCard = (index) => {
    setModalInfoCard(index + 1);
  };

  const openModal = () => {
    setModalInfoCard(false);
    setModalReward(true);
  };

  return (
    <>
      <div className="spacingCardGames">
        {listCards &&
          listCards?.map((card, index) => (
            <div className="card styleCardsGames">
              <img
                src={process.env.PUBLIC_URL + "/img/" + card?.image}
                alt=""
                className="bordeImageCardGames"
              />
              <div className="card-body">
                <h5 className="cardTitleGames">{card?.titulo}</h5>
                <p className="cardTextGames">{card?.descricao}</p>
                <div className="infoOrganization">
                  <Users className="itensIconeLocation spacingIconeCard" />
                  <p className="infoDevCard">
                    Desenvolvedores:
                    {card?.dev &&
                      card?.dev?.map((desenvolvedores) => (
                        <p className="spacingNameDev">
                          {desenvolvedores?.nome}
                        </p>
                      ))}
                  </p>
                </div>
                <div className="spacingButtonCard">
                  <button
                    className="buttonCardGames"
                    onClick={() => openModalInfoCard(index)}
                  >
                    Conhecer jogo
                  </button>
                </div>
              </div>
              {modalInfoCard && modalInfoCard === index + 1 && (
                <ModalInfoGame
                  modalInfo={modalInfoCard}
                  setModalInfo={setModalInfoCard}
                  infoCard={card}
                  setModalReward={openModal}
                />
              )}
            </div>
          ))}
      </div>

      {modalReward && (
        <RewardCollected
          modalReward={modalReward}
          setModalOpenReward={setModalReward}
        />
      )}
    </>
  );
}
