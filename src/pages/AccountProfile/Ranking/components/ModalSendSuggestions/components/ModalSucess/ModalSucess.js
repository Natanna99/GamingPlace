import { Modal } from "react-bootstrap";

export function ModalSucess({ modalSucess, setModalSucess }) {
  return (
    <Modal
      show={modalSucess}
      onHide={setModalSucess}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>TESTE</Modal.Body>
    </Modal>
  );
}
