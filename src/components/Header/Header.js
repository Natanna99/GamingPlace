import { Crown, Gamepad2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./Header.css";
import profile from "../../assets/svg/perfil.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [point, setpoint] = useState(null);

  useEffect(() => {
    setpoint(99);
  }, []);

  return (
    <>
      <div className="styleHeader">
        <div className="footerGaming">
          <Gamepad2 id="iconeFooter" />
          <a href="/">
            <h3 className="textHeader">Gaming Place</h3>
          </a>
        </div>
        <div className="profileHeader">
          <a href="/AllGames">
            <button className="buttonsNews">
              <Gamepad2 />
              Novidades
            </button>
          </a>

          <div className="pointProfile">
            <Crown className="crowProfile" />
            {point && <div className="crowProfile">{point}</div>}
          </div>

          <div>
            <img src={profile} className="sizeProfile" alt="" />
          </div>

          <div className="iconOut">
            <a href="/Login">
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-right-from-bracket"
                className="iconOut"
              />
              Sair
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
