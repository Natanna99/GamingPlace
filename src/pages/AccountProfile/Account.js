import React, { createContext } from "react";
import Header from "../../components/Header/Header";
import "./Account.css";
import BodyProfile from "./BodyProfle/BodyProfile";
import { Emblems } from "./Emblems/Emblems";
import { Ranking } from "./Ranking/Ranking";
import { Footer } from "../../components/Footer/Footer";

export const dataAcctionProfile = createContext();

export default function AccountProfile() {
  const infoProfile = {
    nome: "Zaya Madson",
    point: 99,
    medal: "gold",
    email: "zaya@gmail.com.br",
    locality: "Palmas, Tocantins",
  };

  return (
    <>
      <div className="bodyPages">
        <Header />
        <div className="shadowBody1"></div>
        <div className="shadowBody2"></div>
        <div className="bodyPagesProfile">
          <dataAcctionProfile.Provider
            value={{
              infoProfile,
            }}
          >
            <div className="sizePageProfile">
              <BodyProfile infoProfile={infoProfile} />
              <Emblems />
            </div>
            <Ranking />
          </dataAcctionProfile.Provider>
        </div>
      </div>
      <Footer />
    </>
  );
}
