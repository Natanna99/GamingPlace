import { Gamepad2, KeyRound, User } from "lucide-react";
import "./UserRegistration.css";
import imageRegister from "./../../assets/svg/register.svg";

export function UserRegistration({ mostrarFooter }) {
  return (
    <div className="teste">
      <div className="sectionRegister">
        <div className="logoRegister">
          <div className="textIconeRegister">
            <Gamepad2 id="iconeRegiser" />
            <h3 className="textRegister">Gaming Place</h3>
          </div>
          <h5 className="textRegisterColor">
            Explore os incríveis jogos desenvolvidos no Ceulp Ulbra.
          </h5>
          <div className="centerImageRegister">
            <img src={imageRegister} alt="" className="imageRegister" />
          </div>
        </div>
      </div>
      <div className="sectionRegister02">
        <div>
          <h4>Criar uma conta</h4>
        </div>
        <div className="inputRegister">
          <div className="styleInputRegister">
            <User />
            <input type="text" placeholder="Email" id="inputStyle" />
          </div>
          <div className="styleInputRegister">
            <KeyRound />
            <input type="text" placeholder="Senha" id="inputStyle" />
          </div>
          <div className="styleInputRegister">
            <KeyRound />
            <input type="text" placeholder="Confirma senha" id="inputStyle" />
          </div>
          <div>
            <a href="/">
              <button className="buttonRegister">Cadastrar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
