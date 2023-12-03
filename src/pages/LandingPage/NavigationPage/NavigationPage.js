import { Gamepad2 } from "lucide-react";
import React from "react";
import "./NavigationPage.css";
import { Link } from "react-router-dom";

export function NavigationPage() {
  return (
    <div className="navigationPageHome">
      <div className="logoGaming">
        <Gamepad2 id="iconLogo" />
        <h3 className="nameLogo">Gaming Place</h3>
      </div>
      <div className="organizingButtons">
        <button className="btn" id="buttonPresentationStart">
          <Link id="buttonPage" to="/">
            <div>Inicio</div>
          </Link>
        </button>
        <button id="buttonPresentation">
          <Link id="buttonPage" to="/About">
            <div>Sobre</div>
          </Link>
        </button>
        <button id="buttonPresentation">
          <Link id="buttonPage" to="/AllGames">
            <div>Jogos</div>
          </Link>
        </button>
        <button id="buttonPresentation">
          <Link id="buttonPage" to="/Profile">
            <div>Conta</div>
          </Link>
        </button>
      </div>
    </div>
  );
}
