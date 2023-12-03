import React from "react";
import { useSpring, animated } from "react-spring";
import profileCard from "../../../../assets/svg/cards-perfil.svg";
import "./SectionPage2.css";
import reward from "../../../../assets/svg/recompensa1.svg";
import reward2 from "../../../../assets/svg/recompensa2.svg";
import reward3 from "../../../../assets/svg/recompensa3.svg";

export function Section2() {
  const animationCards = useSpring({
    from: { opacity: 0, transform: "translateY(50%)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 3000 },
  });

  const animationTextProfileCards = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 3000 },
  });

  return (
    <>
      <div className="cardsSectionPage2">
        <animated.div style={animationCards} className="sectionPage2">
          <div className="positionProfile">
            <img src={profileCard} className="imagemProfileCards" alt="" />
          </div>
        </animated.div>
      </div>

      <animated.div style={animationTextProfileCards} className="sectionPage2">
        <div className="sizeBoxTextCards">
          <h3 className="titleTextProfile">
            Acompanhe seu progresso e ganhe recompensas
          </h3>
          <h6 className="textGamingPlace">
            No Gaming Place, você pode acompanhar seu progresso de forma fácil e
            divertida. Através dos emblemas conquistados, troféus e nível do
            usuário, você pode ver como está se saindo dentro da plataforma.
          </h6>
        </div>
        <div className="rewardSpacing">
          <img src={reward} className="bordFormat" alt="" />
          <img src={reward2} className="bordFormat" alt="" />
          <img src={reward3} className="bordFormat" alt="" />
        </div>
      </animated.div>
    </>
  );
}
