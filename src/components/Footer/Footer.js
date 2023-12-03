import React from "react";
import "./Footer.css";
import ImagemFooter from "./../../assets/svg/LooperGroup.svg";
import logoCiencia from "./../../assets/svg/logoCiencia.svg";
import cienciaComputacao from "./../../assets/svg/cienciaComputacao.svg";
import logoSistema from "./../../assets/svg/logoSistema.svg";
import sistemaInfo from "./../../assets/svg/sistemaInformacao.svg";
import logoEngenharia from "./../../assets/svg/logoEngenharia.svg";
import engenhariaSoft from "./../../assets/svg/engenhariaSoftware.svg";
import logoUlbra from "./../../assets/svg/logoUlbra.svg";
import ulbra from "./../../assets/svg/ULBRA.svg";
import palmas from "./../../assets/svg/palmas.svg";
import { Gamepad2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer>
      <div>
        <div className="footerGaming">
          <Gamepad2 id="iconeFooter" />
          <h3 className="nameLogo">Gaming Place</h3>
        </div>
        <div className="colFooter">
          <div>
            <FontAwesomeIcon icon="fa-regular fa-copyright" />
          </div>
          <div className="spacingTextCopyright">
            2023 - Todos os direitos reservados
          </div>
        </div>
        <div className="logoUlbra">
          <div>
            <img src={logoUlbra} alt="" className="sizeLogoUlbra" />
            <img src={ulbra} alt="" className="sizUlbra" />
          </div>
          <div>
            <img src={palmas} alt="" className="logoPalmas" />
          </div>
        </div>
      </div>
      <div className="spacingIconeFooter">
        <div className="aligningImage">
          <img src={logoCiencia} alt="" />
          <img src={cienciaComputacao} alt="" />
        </div>
        <div className="aligningImage">
          <img src={logoSistema} alt="" />
          <img src={sistemaInfo} alt="" />
        </div>
        <div className="aligningImage">
          <img src={logoEngenharia} alt="" />
          <img src={engenhariaSoft} alt="" />
        </div>
      </div>

      <img src={ImagemFooter} className="imagemFooter" alt="imagemFooter" />
    </footer>
  );
}
