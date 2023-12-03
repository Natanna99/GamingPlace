import "./Ranking.css";
import gold from "../../../assets/svg/gold.svg";
import silver from "../../../assets/svg/silver.svg";
import bronze from "../../../assets/svg/bronze.svg";
import { Crown } from "lucide-react";
import { useState } from "react";
import { ModalAddFriend } from "./components/ModalAddFriend/ModalAddFriend";
import { ModalSendSuggestions } from "./components/ModalSendSuggestions/ModalSendSuggestions";

export function Ranking() {
  const informacoes = [
    { photo: "Jaiminho.png", nome: "Jaiminho", point: 100, medal: "gold" },
    { photo: "Zaya.png", nome: "Zaya", point: 99, medal: "silver" },
    {
      photo: "Dona Florinda.png",
      nome: "Dona Florinda",
      point: 90,
      medal: "bronze",
    },
    { photo: "Chaves.png", nome: "Chaves", point: 74 },
    { photo: "Michel Teló.png", nome: "Michel Teló", point: 67 },
    { photo: "Larissa Manoela.png", nome: "Larissa Manoela", point: 50 },
    { photo: "Emma.png", nome: "Emma", point: 43 },
  ];

  const [addFriends, setAddFriends] = useState(null);
  const [sendSuggestions, setSendSuggestions] = useState(null);

  return (
    <div>
      <div className="spacingRanking verticalLine">
        <div className="boxRanking">
          <div>
            <h4 className="fontRanking">Ranking</h4>
          </div>
          {informacoes &&
            informacoes?.map((rank) => (
              <div className="spacingBoxUserRanking">
                <div className="boxUserRanking">
                  <div className="boxPhotoRanking">
                    <img
                      src={process.env.PUBLIC_URL + "/img/" + rank?.photo}
                      alt=""
                      className="sizePhotoRanking"
                    />
                    <h6 id="fontNameRanking">{rank?.nome}</h6>
                  </div>

                  <div className="boxPointRanking">
                    {/* medalhas */}
                    {rank?.medal && rank?.medal === "gold" && (
                      <img src={gold} alt="" className="medals" />
                    )}
                    {rank?.medal && rank?.medal === "silver" && (
                      <img src={silver} alt="" className="medals" />
                    )}
                    {rank?.medal && rank?.medal === "bronze" && (
                      <img src={bronze} alt="" className="medals" />
                    )}
                    {/* potuação */}
                    <div className="pointProfile">
                      <Crown className="crowProfile" />
                      {rank?.point && (
                        <div className="crowProfile">{rank?.point}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="divButtonSaveProfile">
            <button
              className="buttonAddFriends"
              onClick={() => setAddFriends(true)}
            >
              Adicionar amigos
            </button>
          </div>
          <div className="divButtonSaveProfile">
            <button
              className="buttonSendSuggestions"
              onClick={() => setSendSuggestions(true)}
            >
              Enviar sugestão
            </button>
          </div>
        </div>
      </div>

      {addFriends && (
        <ModalAddFriend modalAdd={addFriends} setModalAdd={setAddFriends} />
      )}
      {sendSuggestions && (
        <ModalSendSuggestions
          modalSuggestions={sendSuggestions}
          setModalSuggestions={setSendSuggestions}
        />
      )}
    </div>
  );
}
