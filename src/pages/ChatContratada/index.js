import { useState } from 'react';
import { getSystemErrorName } from 'util';
import {
  NavbarMenuContratada,
  NavbarMenuContratante,
} from '../../components/NavbarMenuContratada';
import {
  BoxChat,
  BoxAzul,
  Container,
  DivChat,
  DivTextChat,
  DivBoxUsuarios,
  DivUsuario,
  DivGeral,
  DivUsuario1,
  DivUsuario2,
  DivUsuario3,
  DivUsuario4,
  DivNomeChat,
  DivCaixaContratante,
} from './styles';
export const ChatContratada = () => {
  const [user, setUser] = useState();
  const [valorTxt, setValorTxt] = useState();
  const [tempTest, setTempTxt] = useState();

  async function getName(valor) {
    setUser(valor);
  }
  return (
    <>
    <NavbarMenuContratada />
      <Container>
        <DivGeral>
          <BoxChat>
            <DivNomeChat>
              <span id="spanNome">{user}</span>
            </DivNomeChat>
            <BoxAzul>
              <h1>Chat</h1>
              <DivBoxUsuarios>
                <DivUsuario>
                  <img src="online.svg" id="online" />
                  <img src="woman.svg" id="userIcon" />
                  <span
                    onClick={(e) => getName(e.target.textContent)}
                    id="userName"
                  >
                    Cristina Maria
                  </span>
                </DivUsuario>
                <DivUsuario1>
                  <img src="online.svg" id="online" />
                  <img src="man.svg" id="userIcon" />
                  <span
                    onClick={(e) => getName(e.target.textContent)}
                    id="userName"
                  >
                    José Vitor
                  </span>
                </DivUsuario1>
                <DivUsuario2>
                  <img src="online.svg" id="online" />
                  <img src="manred.svg" id="userIcon" />
                  <span
                    onClick={(e) => getName(e.target.textContent)}
                    id="userName"
                  >
                    Rogerio Ceni
                  </span>
                </DivUsuario2>
                <DivUsuario3>
                  <img src="online.svg" id="online" />
                  <img src="man.svg" id="userIcon" />
                  <span
                    onClick={(e) => getName(e.target.textContent)}
                    id="userName"
                  >
                    Marcelo Jorge
                  </span>
                </DivUsuario3>
                <DivUsuario4>
                  <img src="online.svg" id="online" />
                  <img src="blackwoman.svg" id="userIcon" />
                  <span
                    onClick={(e) => getName(e.target.textContent)}
                    id="userName"
                  >
                    Joana Jade
                  </span>
                </DivUsuario4>
              </DivBoxUsuarios>
            </BoxAzul>
            <DivChat>
              <img src="picture.svg" alt="enviar fotos" id="picture-image" />
              <input
                id="InputChat"
                onBlur={(e) => setTempTxt(e.target.value)}
                placeholder="Digite sua mensagem"
              ></input>
              <img
                src="send-message.svg"
                onClick={(e) => setValorTxt(tempTest)}
                alt="enviar mensagem"
                id="send-image"
              />
            </DivChat>
            <DivCaixaContratante>
              <p>
                Boa tarde, tudo bem? Gostaria conversar a respeito do serviço de
                diarista
              </p>
            </DivCaixaContratante>
            <br />
            <DivTextChat>
              <span id="spanTxt">{valorTxt}</span>
            </DivTextChat>
          </BoxChat>
        </DivGeral>
      </Container>
    </>
  );
};
