import React, { useEffect, useState } from "react";
import "./BodyProfile.css";
import imageProfile from "../../../assets/svg/perfil.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Coins, Crown, MapPin, Pencil, Trophy } from "lucide-react";
import { ModalEditProfile } from "./components/ModalEditProfile/ModalEditProfile";

export default function BodyProfile({ infoProfile }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [locality, setLocality] = useState(null);
  const [trophies, setTrophies] = useState(null);
  const [point, setPoint] = useState(null);
  const [progress, setProgress] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(null);

  useEffect(() => {
    setEmail(infoProfile?.email);
    setLocality(infoProfile?.locality);
    setName(infoProfile?.nome);
    setTrophies(5);
    setPoint(2000);
    setProgress(99);
  }, []);

  return (
    <div className="spacingPageProfile">
      <div className="boxProfileProgress">
        <div>
          <div className="infoProfile">
            <div className="boxPhotograph">
              <img src={imageProfile} className="sizeProfileBox" alt="" />
              <button
                className="divIconeEditProfile"
                onClick={() => setOpenEditModal(true)}
              >
                <Pencil className="editProfile" />
              </button>
            </div>

            <div>
              <div className="divInfo">
                {name && <h3>{name}</h3>}
                {email && (
                  <div className="centerIconProfile">
                    <div className="info centerIconProfile">
                      <FontAwesomeIcon
                        icon="fa-regular fa-envelope"
                        className="sizeIconProfile"
                      />
                    </div>
                    <div>
                      <h6 className="info">{email}</h6>
                    </div>
                  </div>
                )}
                {locality && (
                  <div className="centerIconProfile">
                    <div className="info centerIconProfile">
                      <MapPin className="itensIconeLocation" />
                    </div>
                    <div>
                      <h6 className="info">{locality}</h6>
                    </div>
                  </div>
                )}
              </div>
              <div className="gamification">
                <div className="divGamer">
                  Trófeus
                  <div className="itensGamerProfile">
                    <div>
                      <Trophy className="itensIcone" />
                    </div>
                    {trophies && <div>{trophies}</div>}
                  </div>
                </div>
                <div className="divGamer">
                  Pontos
                  <div className="itensGamerProfile">
                    <div>
                      <Coins className="itensIcone" />
                    </div>
                    {point && <div>{point.toLocaleString("pt-BR")}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="pointProfileGamer">
              <div className="pointProfileProgess">
                <Crown className="crowProfile" />
                <div className="crowProfileGamer">Progresso</div>
              </div>

              <div className="pointProfileProgess crowProfileGamer">
                {progress}/100
              </div>
            </div>
            <div className="divProgress">
              <div className="progress" id="progressProfile">
                <div
                  className="progressBarProfile"
                  role="progressbar"
                  style={{
                    width: `${progress}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openEditModal && (
        <ModalEditProfile
          setOpenEditModal={setOpenEditModal}
          openEditModal={openEditModal}
          name={name}
          email={email}
          locality={locality}
        />
      )}
    </div>
  );
}
