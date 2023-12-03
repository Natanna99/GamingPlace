import React from "react";
import "./Presentation.css";
import { NavigationPage } from "../NavigationPage/NavigationPage";
import imagemPresentation from "./../../../assets/svg/LooperPresention.svg";
import boyBackground from "./../../../assets/svg/boyPresentation.svg";
import boyPresentation from "./../../../assets/svg/Saly-16.svg";

export function Presentation() {
  return (
    <>
      <div className="initialPresentation">
        <NavigationPage />
        <img src={imagemPresentation} alt="imagemFooter" />
        <img
          src={boyBackground}
          className="imagemPresentation"
          alt="imagemFooter"
        />
        <img src={boyPresentation} className="imagemBoy" alt="imagemFooter" />
        <div className="centerPresentation">
          <h3 className="textWelcome">Seja muito bem-vindo!</h3>
          <span id="textDescription">
            Explore os incríveis jogos desenvolvidos no Ceulp Ulbra.
          </span>
          <div>
            <a href="/UserRegistration">
              <button id="buttonStart">Começar agora</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
