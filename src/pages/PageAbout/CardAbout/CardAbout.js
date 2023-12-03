import { Carousel } from "react-bootstrap";
import "./CardAbout.css";

export function CardAbout({ listInfoAbout }) {
  return (
    <div className="spacingPageAbout">
      <Carousel className="boxCardAbout" id="carouselCards">
        {listInfoAbout &&
          listInfoAbout?.map((itens, index) => (
            <Carousel.Item>
              <div className="cardCarousel">
                <div className="cardInfoCarousel">
                  <div className="cardCarouselText">
                    <div>
                      <h5 className="divTextCard">{itens?.descricao}</h5>
                    </div>
                  </div>
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
  );
}
