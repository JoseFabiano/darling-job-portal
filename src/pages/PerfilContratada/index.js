import { NavbarMenuContratada } from '../../components/NavbarMenuContratada';
import { useHistory } from 'react-router-dom';
import {
  Descricao,
  BoxUsuario,
  BoxGeral,
  Container,
  DivAvali,
  DivSuaAvali,
  DivServPrest,
  DivPrestServ,
  DivServicos,
  DivEstrelas,
  TextBemVinda,
  TextNome,
} from '../../pages/PerfilContratada/styles';

export const PerfilContratada = () => {
  const history = useHistory();
  if (localStorage.getItem('contratado') == null) {
    history.push('/loginContratado');
  }
  var usuario = localStorage.getItem('contratado');
  var contratado = JSON.parse(usuario);
  console.log(contratado);
  return (
    <>
      {contratado && (
        <Container>
          <NavbarMenuContratada />
          <BoxGeral>
            <BoxUsuario>
              <img
                src="perfil.svg"
                alt="imagem de perfil-contratada"
                id="perfil"
              />
              <img src="online.svg" alt="sinal-online" id="online" />
              <img src="engrenagem.svg" alt="logo-edição" id="edit" />
              <TextNome>
              <h1>Olá, {contratado.nome}</h1>
              </TextNome>
              <TextBemVinda>
              <h1 id="bemVinda">Bem vindx de volta!</h1>
              </TextBemVinda>
            </BoxUsuario>
            <Descricao>
              <h1>
                Sou profissional da categoria Família, e faço serviços
                relacionados a Cozinheira, Diarista, Lavadeira. Estou localizado
                no bairro Santo Amaro em São Paulo.
              </h1>
            </Descricao>
            <DivAvali>
              <DivSuaAvali>
                <h1>Suas Avaliações</h1>
              </DivSuaAvali>
              <h1 id="nome">Cristina</h1>
              <h1 id="descricao">
                Fui muito bem atendida com um trabalho de qualidade. Valeu a
                pena, orçamento bem feito. Obrigada!
              </h1>
              <h1 id="nome">José</h1>
              <h1 id="descricao">
                O trabalho prestado pela profissional foi excelente. Recomendo!
              </h1>
              <h1 id="nome">Lucas</h1>
              <h1 id="descricao">
                Excelente profissional, rápida, honesta e com bom preço.
                Recomendo muito!
              </h1>
              <h1 id="nome">Vitor</h1>
              <h1 id="descricao">
                Super atenciosa, Honesta e com um preço ótimo!
              </h1>
            </DivAvali>
            <DivServPrest>
              <DivPrestServ>
                <h1>Serviços Prestados</h1>
              </DivPrestServ>
              <DivServicos>
                <img src="bolaAzul.svg" alt="bola azul" id="bolaAzul1" />
                <h1>Diarista</h1>
                <DivEstrelas>
                  <img src="estrelas.svg" alt="bola azul" id="estrelas" />
                </DivEstrelas>
                <img src="bolaAzul.svg" alt="bola azul" id="bolaAzul" />
                <h1>Cozinheira</h1>
                <DivEstrelas>
                  <img src="estrelas.svg" alt="bola azul" id="estrelas" />
                </DivEstrelas>
                <img src="bolaAzul.svg" alt="bola azul" id="bolaAzul" />
                <h1>Babá</h1>
                <DivEstrelas>
                  <img src="estrelas.svg" alt="bola azul" id="estrelas" />
                </DivEstrelas>
              </DivServicos>
            </DivServPrest>
          </BoxGeral>
        </Container>
      )}
    </>
  );
};
