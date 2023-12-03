import { Carousel } from "react-bootstrap";
import "./CarouselCards.css";
import { useState } from "react";
import ModalInfoGame from "../../../../components/ModalInfoGame/ModalInfoGame";
import { RewardCollected } from "../../../../components/ModalInfoGame/components/RewardCollected/RewardCollected";

export function CarouselCards({ listCarousel }) {
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
    <div>
      <div className="spacingPageGames">
        <Carousel className="boxPageGames" id="carouselCards">
          {listCarousel &&
            listCarousel?.map((itens, index) => (
              <Carousel.Item>
                <div className="cardCarousel">
                  <div className="cardInfoCarousel">
                    <div className="cardCarouselText">
                      <div>
                        <h3>{itens?.titulo}</h3>
                      </div>
                      <div>
                        <h5 className="cardCarouselDescription">
                          {itens?.descricao}
                        </h5>
                      </div>
                      <div className="buttonPosition">
                        <button
                          className="buttonKnowGame"
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
                        infoCard={itens}
                        setModalReward={openModal}
                      />
                    )}
                    <div className="divImageCard">
                      <img
                        src={process.env.PUBLIC_URL + "/img/" + itens?.image}
                        alt=""
                        className="bordeImageCard"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
      {modalReward && (
        <RewardCollected
          modalReward={modalReward}
          setModalOpenReward={setModalReward}
        />
      )}
    </div>
  );
}
