import { Footer } from "../../components/Footer/Footer";
import { HeaderInfo } from "../../components/HeaderInfo/HeaderInfo";
import { CardAbout } from "./CardAbout/CardAbout";
import "./PageAbout.css";

export function PageAbout() {
  const infoAbout = [
    {
      descricao:
        "A Gaming Place é uma plataforma gamificada que foi idealizada para atender aos alunos do CEULP ULBRA, afim de permitir uma melhor divulgação dos jogos desenvolvidos por eles, assim como tornar estes produtos acessíveis para o público",
      image: "Sobre1.png",
    },
    {
      descricao:
        "Os componentes de gamificação da plataforma foram desenvolvidos com a assistência do framework Educa3C, uma ferramenta criada pela professora Fernanda Gomes, docente dos cursos de Tecnologia do CEULP ULBRA.",
      image: "Sobre2.png",
    },
  ];
  return (
    <>
      <div className="bodyPages">
        <HeaderInfo />
        <div className="shadowBody1"></div>
        <div className="shadowBody2"></div>
        <div className="bodyPagesAbout">
          <h3 className="fontPagesAbout">Sobre</h3>
          <CardAbout listInfoAbout={infoAbout} />
        </div>
      </div>
      <Footer />
    </>
  );
}
