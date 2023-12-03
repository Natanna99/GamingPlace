import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import "./ModalAddfriend.css";
import { useState } from "react";
import { MapPin } from "lucide-react";

export function ModalAddFriend({ modalAdd, setModalAdd }) {
  const informacoes = [
    {
      photo: "Jaiminho.png",
      nome: "Jaiminho",
      point: 100,
      medal: "gold",
      location: "Palmas, Tocantins",
    },
    {
      photo: "Zaya.png",
      nome: "Zaya",
      point: 99,
      medal: "silver",
      location: "Palmas, Tocantins",
    },
    {
      photo: "Dona Florinda.png",
      nome: "Dona Florinda",
      point: 90,
      medal: "bronze",
      location: "Palmas, Tocantins",
    },
    {
      photo: "Chaves.png",
      nome: "Chaves",
      point: 74,
      location: "Palmas, Tocantins",
    },
    {
      photo: "Michel Teló.png",
      nome: "Michel Teló",
      point: 67,
      location: "Palmas, Tocantins",
    },
    {
      photo: "Larissa Manoela.png",
      nome: "Larissa Manoela",
      point: 50,
      location: "Palmas, Tocantins",
    },
    {
      photo: "Emma.png",
      nome: "Emma",
      point: 43,
      location: "Palmas, Tocantins",
    },
    {
      photo: "Natanna.png",
      nome: "Natanna Santos",
      point: 43,
      location: "Palmas, Tocantins",
    },
    {
      photo: "stefan.png",
      nome: "Stefan",
      point: 43,
      location: "Palmas, Tocantins",
    },
  ];

  const [resultSearch, setResultSearch] = useState(null);

  const searchFriend = (e) => {
    setResultSearch(
      informacoes.filter((item) =>
        item.nome.toLowerCase().includes(e.toLowerCase())
      )
    );
  };

  return (
    <Modal
      show={modalAdd}
      onHide={setModalAdd}
      backdrop="static"
      keyboard={false}
      id="modalAddFriens"
    >
      <Modal.Body>
        <div>
          <div className="buttonCloseModal">
            <i
              className="iconeCloseModalProfile"
              onClick={() => {
                setModalAdd(false);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </i>
          </div>

          <div className="centerModalAddfriends">
            <h3>Buscar amigos</h3>
            <input
              onChange={(e) => searchFriend(e.target.value)}
              className="inputSearchFriend"
            />
          </div>
          {resultSearch &&
            resultSearch?.map((result) => (
              <div className="boxProfileSearch">
                <div className="boxProfileSearchFriend">
                  <div className="photoInfoFriends">
                    <img
                      src={process.env.PUBLIC_URL + "/img/" + result?.photo}
                      alt=""
                      className="sizePhotoProfileSearch"
                    />
                    <div className="infoSearchFriend">
                      <div>{result?.nome}</div>
                      <div className="fontLocationFriends">
                        <MapPin className="itensIconeLocation spacinfLocationIcone" />
                        {result?.location}
                      </div>
                    </div>
                  </div>
                  <div className="divButtonSearch">
                    <button className="buttonAddSearch">
                      Adicionar amizade
                    </button>
                  </div>
                </div>
              </div>
            ))}
          <div className="footerSearch"></div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
