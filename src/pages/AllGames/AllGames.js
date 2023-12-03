import Header from "../../components/Header/Header";
import "./AllGames.css";
import efeitoBody from "../../assets/svg/efeitoRoxo.svg";
import { CarouselCards } from "./components/CarouselCards/CarouselCards";
import { CardsGames } from "./components/CardsGames/CardsGames";
import { Footer } from "../../components/Footer/Footer";

export function AllGames() {
  const infoCardCollapse = [
    {
      titulo: "Logic Girl",
      descricao:
        "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      image: "LogicGirl.png",
      dev: [
        {
          nome: "Natanna Rocha",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "Stefan Lucas",
          imagem: "imagemDev02.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "Douglas Aquino",
          imagem: "imagemDev03.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "Jog teste",
      descricao:
        "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      image: "GamesColapse.png",
    },
    {
      titulo: "Jog teste",
      descricao:
        "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      image: "GamesColapse1.png",
    },
  ];

  const infoCard = [
    {
      titulo: "Nome do jogo",
      descricao:
        "Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo.",
      image: "JogoCardTodos1.png",
      dev: [
        {
          nome: "NomeDev01",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "NomeDev02",
          imagem: "imagemDev02.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "Nome do jogo",
      descricao:
        "Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo.",
      image: "JogoCardTodos2.png",
      dev: [
        {
          nome: "NomeDev01",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "NomeDev02",
          imagem: "imagemDev012.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "Nome do jogo",
      descricao:
        "Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo.",
      image: "JogoCardTodos3.png",
      dev: [
        {
          nome: "NomeDev01",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "NomeDev02",
          imagem: "imagemDev012.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "Nome do jogo",
      descricao:
        "Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo.",
      image: "JogoCardTodos4.png",
      dev: [
        {
          nome: "NomeDev01",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "NomeDev02",
          imagem: "imagemDev012.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "Nome do jogo",
      descricao:
        "Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo.",
      image: "JogoCardTodos5.png",
      dev: [
        {
          nome: "NomeDev01",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "NomeDev02",
          imagem: "imagemDev012.png",
          location: "ULBRA - Palmas, TO",
        },
      ],
    },
    {
      titulo: "Nome do jogo",
      descricao:
        "Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo Descrição do jogo.",
      image: "JogoCardTodos6.png",
      dev: [
        {
          nome: "NomeDev01",
          imagem: "imagemDev01.png",
          location: "ULBRA - Palmas, TO",
        },
        {
          nome: "NomeDev02",
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
          <h3 className="fontPagesGames">Todos os Jogos</h3>
          <CarouselCards listCarousel={infoCardCollapse} />
          <div>
            <h4 className="titleCardsPages">Outros Jogos</h4>
          </div>

          <CardsGames listCards={infoCard} />
        </div>
      </div>
      <Footer />
    </>
  );
}
