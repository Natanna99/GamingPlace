import React from "react";
import { useSpring, animated } from "react-spring";
import "./SectionPage3.css";
import { BookCopy, HeartPulse, TreeDeciduous, Users } from "lucide-react";

export function Section3() {
  const animationNewGames = useSpring({
    from: { opacity: 0, transform: "translateY(0)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 3000 },
  });

  const animationButtons = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 3000 },
  });

  return (
    <>
      <div className="sectionCenter3">
        <animated.div style={animationNewGames} className="sectionPage3">
          <div>
            <h3 className="titleTextProfile">Explore novos jogos</h3>
            <h6 className="textGamingPlace">
              Plataforma oferece uma visibilidade sem precedentes aos
              desenvolvedores de jogos educacionais. Professores, pesquisadores
              e estudantes talentosos têm a oportunidade de compartilhar suas
              criações com o público, promovendo não apenas seus jogos, mas
              também a excelência na educação por meio da tecnologia. A
              iniciativa reforça o compromisso da instituição com a produção de
              jogos de qualidade e contribui para o desenvolvimento do mercado
              de games no Brasil e no mundo.
            </h6>
          </div>
        </animated.div>
      </div>

      <animated.div style={animationButtons} className="sectionButton">
        <div className="organizeButton">
          <a href="/HealthGames">
            <div className="buttonCircleGame">
              <HeartPulse className="iconeNewGames" />
              Saúde
            </div>
          </a>
          <a href="/EducationGames">
            <div className="buttonCircleGame">
              <BookCopy className="iconeNewGames" />
              Educação
            </div>
          </a>
          <a href="/Environment">
            <div className="buttonCircleGame">
              <TreeDeciduous className="iconeNewGames" />
              Meio Ambiente
            </div>
          </a>
          <a href="/Community">
            <div className="buttonCircleGame">
              <Users className="iconeNewGames" />
              Comunidade
            </div>
          </a>
        </div>
      </animated.div>

      <div className="sectionCenter3 spacing">
        <a href="/UserRegistration">
          <button id="buttonStart">Começar agora</button>
        </a>
      </div>
    </>
  );
}
