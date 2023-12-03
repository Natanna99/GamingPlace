import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Users } from "lucide-react";
import { Modal } from "react-bootstrap";
import "./ModalSendSuggestions.css";
import { dataAcctionProfile } from "../../../Account";
import { useContext } from "react";
import { ModalSucess } from "./components/ModalSucess/ModalSucess";
import { useState } from "react";

export function ModalSendSuggestions({
  modalSuggestions,
  setModalSuggestions,
}) {
  const { infoProfile } = useContext(dataAcctionProfile);
  const [sendProfileSuggestions, setSendProfileSuggestions] = useState(null);

  const sendSuggestionsModal = () => {
    setSendProfileSuggestions(true);
    setModalSuggestions(false);
  };

  return (
    <Modal
      show={modalSuggestions}
      onHide={setModalSuggestions}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        <div>
          <div className="buttonCloseModal">
            <i
              className="iconeCloseModalProfile"
              onClick={() => {
                setModalSuggestions(false);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </i>
          </div>
        </div>

        <div className="centerModalAddfriends">
          <h3>Sugestão</h3>
        </div>
        <div className="divInputSuggestion">
          <div>
            <div className="iconeProfileEdit">
              <Users className="itensIconeLocation" />
            </div>
            <input className="inputProfileEdit" value={infoProfile?.nome} />
          </div>
          <div className="divInputProfileEdit">
            <div className="iconeProfileEdit">
              <FontAwesomeIcon
                icon="fa-regular fa-envelope"
                className="sizeIconProfile"
              />
            </div>
            <input className="inputProfileEdit" value={infoProfile?.email} />
          </div>
          <input type="text" className="textSuggestions" />

          <div className="divSendSuggestions">
            <button
              className="sendSuggestions"
              onClick={() => sendSuggestionsModal(true)}
            >
              Enviar
            </button>
          </div>
        </div>

        {sendProfileSuggestions &&
          (console.log(sendProfileSuggestions),
          (
            <ModalSucess
              modalSucess={sendProfileSuggestions}
              setModalSucess={setSendProfileSuggestions}
            />
          ))}
      </Modal.Body>
    </Modal>
  );
}
