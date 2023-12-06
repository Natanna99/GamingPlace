import Header from "../../components/Header/Header";
import efeitoBody from "../../assets/svg/efeitoRoxo.svg";
import { CarouselCards } from "../AllGames/components/CarouselCards/CarouselCards";
import { CardsGames } from "../AllGames/components/CardsGames/CardsGames";
import { Footer } from "../../components/Footer/Footer";

export function Education() {
  const infoCardCollapse = [
    {
      titulo: "Letrando",
      descricao:
        "Letrando é um jogo educativo especialmente projetado para proporcionar uma experiência de aprendizado envolvente e inclusiva para pessoas no espectro autista. Com um foco central na habilidade de soletrar, o jogo oferece uma abordagem divertida e interativa para fortalecer as habilidades linguísticas e promover a autonomia.",
      image: "education.png",
    },
    {
      titulo: "Game Math",
      descricao:
        "Game Math é um educativo jogo projetado para tornar o aprendizado de matemática uma experiência empolgante para crianças. Com uma mistura inteligente de jogabilidade envolvente e conceitos matemáticos fundamentais, Game Math é a ferramenta ideal para transformar o estudo em uma aventura educativa, proporcionando às crianças dicas valiosas de matemática enquanto se divertem.",
      image: "JogoCardTodos2.png",
    },
    {
      titulo: "EduQuest",
      descricao:
        "EduQuest é um jogo educativo interativo projetado para proporcionar uma experiência de aprendizado imersiva. Com uma abordagem baseada em missões, os jogadores exploram ambientes virtuais, enfrentando desafios educacionais personalizados em áreas como matemática, ciências e línguas.",
      image: "caderno.png",
    },
  ];

  const infoCard = [
    {
      titulo: "LetraMente Explora",
      descricao:
        "LetraMente Explora é um jogo educativo focado nas diferentes formas das letras. Com ambientes interativos, desafios e abordagens pedagógicas inovadoras, o jogo proporciona uma experiência envolvente para o aprendizado da escrita, promovendo o desenvolvimento preciso das habilidades linguísticas.",
      image: "JogoCardEducation1.png",
      dev: [
        {
          nome: "Pedro Gomes",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "Laura Sousa",
          imagem: "imagemDev02.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "GeoCraft 3D",
      descricao:
        "GeoCraft 3D é um jogo educativo tridimensional que permite aos jogadores criar e explorar formas geométricas. Com ambientes interativos e desafios, o jogo oferece uma abordagem prática e imersiva para o aprendizado das propriedades e manipulações das formas, incentivando o entendimento conceitual e a criatividade.",
      image: "formas.png",
      dev: [
        {
          nome: "Carlos Daniel",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "Júlia Costa",
          imagem: "imagemDev012.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "Learniverse",
      descricao:
        "Learniverse é um jogo educativo que integra tecnologia e aprendizado. Com base em uma abordagem interativa e personalizada, o Learniverse oferece uma variedade de desafios adaptativos, promovendo o desenvolvimento cognitivo em diversas disciplinas. ",
      image: "iot.png",
      dev: [
        {
          nome: "Bruno Henrique",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "Marcos André",
          imagem: "imagemDev012.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "SmartLearn Adventures",
      descricao:
        "SmartLearn Adventures é um jogo educativo centrado na exploração de conhecimento. Utilizando tecnologia de ponta, oferece uma experiência adaptativa que abrange várias disciplinas. Através de desafios progressivos e análise de desempenho, o jogo se destaca como uma plataforma interativa, promovendo a assimilação eficaz de conceitos educacionais.",
      image: "boy-studying.png",
      dev: [
        {
          nome: "Bruna Thais",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "Laura Maria",
          imagem: "imagemDev012.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "NetMastermind",
      descricao:
        "NetMastermind é um jogo educativo projetado para ensinar os fundamentos das redes de computadores de maneira envolvente. Com simulações interativas, desafios práticos e cenários do mundo real, o jogo oferece uma experiência imersiva que auxilia na compreensão de protocolos, configurações e práticas de segurança. NetMastermind é a ferramenta ideal para transformar o aprendizado de redes em uma jornada dinâmica e educativa.",
      image: "redes-computadores.png",
      dev: [
        {
          nome: "Maria Antonia",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "Lucas Matheus",
          imagem: "imagemDev012.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "PrediLogic",
      descricao:
        "PrediLogic é um jogo educativo que se concentra no ensino da lógica de predicados de forma acessível. Com desafios estruturados, níveis progressivos e exemplos práticos, os jogadores são guiados através dos princípios fundamentais dessa disciplina. PrediLogic oferece uma experiência simplificada, tornando o aprendizado da lógica de predicados acessível e estimulante.",
      image: "mulher-sorrindo.png",
      dev: [
        {
          nome: "Douglas Santos",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "João Vitor",
          imagem: "imagemDev012.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bodyPages">
        <Header />
        <div className="divEfeitoPageGames">
          <img src={efeitoBody} className="efeitoPageGames" alt="" />
        </div>
        <div className="bodyPagesGames">
          <h3 className="fontPagesGames">Educação</h3>
          <CarouselCards listCarousel={infoCardCollapse} />
          <div>
            <h4 className="titleCardsPages">Mais Jogos desse seguimento</h4>
          </div>

          <CardsGames listCards={infoCard} />
        </div>
      </div>
      <Footer />
    </>
  );
}
