import React from "react";
import { Link } from "react-router-dom";
import { 
    Container,
    Modal, 
    Linha,
} from "./styles";
export const ModalRedirectLogin = () => {
    return(
        <>
        <Container/>
        <Modal>
            <img src="logo-robo.svg" id="logo"/>
            <Linha/>
            <span id="quest">Qual das frases se encaixa ao seu perfil? </span>
            <Link to='/loginContratado'>
                <button id="button1" className="button1">Vou ser Contratado</button>
            </Link>
            <Link to='/loginContratante'>
                <button id="button2" className="button2">Vou contratar</button>
            </Link>
        </Modal>
        </>
    )
}