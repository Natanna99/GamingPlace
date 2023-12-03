import React from "react";
import { useSpring, animated } from "react-spring";
import "./SectionPage1.css";
import cardsGame from "../../../../assets/svg/cardsJogos.svg";

export function Section1() {
  const animationCards = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 3000 },
  });

  const animationTextCards = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(50%)" },
    config: { duration: 3000 },
  });

  return (
    <>
      <animated.div style={animationCards} className="section1Card">
        <div className="cardsSection1">
          <img src={cardsGame} className="imagemCards" alt="" />
        </div>
      </animated.div>

      <animated.div style={animationTextCards} className="section2Card">
        <div className="sizeBoxTextCards">
          <h3 className="titleTextGamingPlace">Gaming Place</h3>
          <h6 className="textGamingPlace">
            A Gaming Place é uma plataforma gamificada que atua sendo um
            ambiente unificado para os jogos desenvolvidos no CEULP/ULBRA, os
            quais são segmentados por áreas, como Saúde, Social, Educação e
            Acessibilidade. Esse espaço é importante pois concentra todos os
            jogos em um só lugar, facilitando o acesso e a divulgação por parte
            dos desenvolvedores.
          </h6>
        </div>
      </animated.div>
    </>
  );
}
