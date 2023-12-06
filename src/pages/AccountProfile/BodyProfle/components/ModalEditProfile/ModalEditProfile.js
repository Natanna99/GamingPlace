import Modal from "react-bootstrap/Modal";
import "./ModalEditProfile.css";
import { GraduationCap, MapPin, Pencil, Users } from "lucide-react";
import imageProfile from "../../../../../assets/svg/perfil.svg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ModalEditProfile({
  setOpenEditModal,
  openEditModal,
  name,
  email,
  locality,
}) {
  const [instituicao, setIntitucao] = useState(null);

  useEffect(() => {
    setIntitucao("Ceulp ULBRA");
  }, []);

  return (
    <Modal
      show={openEditModal}
      onHide={setOpenEditModal}
      className="modalProfile"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        <div className="bodyModalProfileEdit">
          <i
            className="iconeCloseModalProfile"
            onClick={() => {
              setOpenEditModal(false);
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </i>
          <div className="centerItensModalProfile">
            <img src={imageProfile} className="sizeProfileBox" alt="" />
            <button className="iconeEditProfile">
              <Pencil className="editProfile" />
            </button>
            <div>
              <div className="divInputProfileEdit">
                <div className="iconeProfileEdit">
                  <FontAwesomeIcon
                    icon="fa-regular fa-envelope"
                    className="sizeIconProfile"
                  />
                </div>
                <input className="inputProfileEdit" value={email} />
              </div>

              <div className="divInputProfileEdit">
                <div className="iconeProfileEdit">
                  <Users className="itensIcone" id="iconeProfileEditColorWhite" />
                </div>
                <input className="inputProfileEdit" value={name} />
              </div>

              <div className="divInputProfileEdit">
                <div className="iconeProfileEdit">
                  <GraduationCap className="itensIcone" id="iconeProfileEditColorWhite"/>
                </div>

                <input className="inputProfileEdit" value={instituicao} />
              </div>

              <div className="divInputProfileEdit">
                <div className="iconeProfileEdit">
                  <MapPin className="itensIcone" id="iconeProfileEditColorWhite"/>
                </div>

                <input className="inputProfileEdit" value={locality} />
              </div>
            </div>

            <div className="divButtonSaveProfile">
              <button id="buttonSave" onClick={()=>setOpenEditModal(false)}>Salvar</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
