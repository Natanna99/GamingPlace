import Header from "../../components/Header/Header";
import efeitoBody from "../../assets/svg/efeitoRoxo.svg";
import { CarouselCards } from "../AllGames/components/CarouselCards/CarouselCards";
import { CardsGames } from "../AllGames/components/CardsGames/CardsGames";
import { Footer } from "../../components/Footer/Footer";

export function Community() {
  const infoCardCollapse = [
    {
      titulo: "Nome do jogo",
      descricao:
        "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
      image: "education.png",
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
      image: "JogoCardEducation1.png",
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
      image: "JogoCardEducation2.png",
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
      image: "JogoCardEducation3.png",
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
      image: "JogoCardEducation4.png",
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
      image: "JogoCardEducation5.png",
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
      image: "JogoCardEducation6.png",
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
          <h3 className="fontPagesGames">Comunidade</h3>
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
