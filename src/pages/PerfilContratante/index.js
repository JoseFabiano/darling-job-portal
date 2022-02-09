import { NavbarMenuContratante } from '../../components/NavbarMenuContratante';

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
  DivTexto,
  DivEndereco,
  DivTextoEndereco,
  DivEnderecoContratante,
} from '../../pages/PerfilContratante/styles';

export const PerfilContratante = () => {
  var dados = localStorage.getItem('contratante');
  var usuario = JSON.parse(dados);

  console.log(sessionStorage.dadosContratante = usuario.nome);
  console.log("aaaa")


  return (
    <>
      <Container>
        <NavbarMenuContratante />
        <BoxGeral>
          <BoxUsuario>
            <img src="perfil.svg" alt="imagem de perfil-contratada" id="perfil" />
            <img src="online.svg" alt="sinal-online" id="online" />
            <h1>Olá {sessionStorage.dadosContratante = usuario.nome}</h1>
            <img src="estrelas.svg" alt="bola azul" id="estrelasP" />
            <h1 id="bemVinda">Bem vindo!</h1>
            <img src="engrenagem.svg" alt="logo-edição" id="edit" />
          </BoxUsuario>
          <Descricao>
            <h1>
              Sou mãe de família e trabalho todos os dias, não tenho tempo para limpar a casa e fazer comida ou cuidar dos meus filhos, procuro serviços de diarista
            </h1>
          </Descricao>
          <DivAvali>
            <DivSuaAvali>
              <h1>Suas Avaliações</h1>
            </DivSuaAvali>
            <h1 id="nome">Cristina</h1>
            <h1 id="descricao">Atendimento ótimo, a contratante foi super atenciosa!</h1>
            <h1 id="nome">José</h1>
            <h1 id="descricao">Muito gente boa, fui muito bem recebida!</h1>
            <h1 id="nome">Lucas</h1>
            <h1 id="descricao">Atendimento ótimo, a contratante foi super atenciosa!</h1>
            <h1 id="nome">Vitor</h1>
            <h1 id="descricao">Atendimento ótimo, a contratante foi super atenciosa!</h1>
            <h1 id="nome">Roberto</h1>
            <h1 id="descricao">Atendimento ótimo, a contratante foi super atenciosa!</h1>
          </DivAvali>
          <DivServPrest>
            <DivPrestServ>
              <h1>Serviços Prestados</h1>
            </DivPrestServ>
            <DivServicos>
              <img src="bolaAzul.svg" alt="bola azul" id="bolaAzul1" /><h1 id="destaque">Diarista</h1>
              <DivTexto>
                <h1 id="comodos">Comodos:</h1><h1 id="qtdComodos">4</h1>
              </DivTexto>
              <img src="bolaAzul.svg" alt="bola azul" id="bolaAzul2" /><h1 id="destaque">Cozinheira</h1>
              <DivTexto>

              </DivTexto>
              <img src="bolaAzul.svg" alt="bola azul" id="bolaAzul" /><h1 id="destaque">Filhos?</h1>
              <DivTexto>
                <h1 id="rFilhos">Sim</h1>
              </DivTexto>
            </DivServicos>
          </DivServPrest>
          <DivEndereco>
            <DivTextoEndereco>
              <h1>Endereço</h1>
            </DivTextoEndereco>
            <DivEnderecoContratante>
              <h1 id="endereco">Rua Luis Cléber, 294</h1>
              <h1 id="tComplemento">Complemento:</h1><h1 id="complemento">Ap 143 Bloco 3</h1>
            </DivEnderecoContratante>
          </DivEndereco>
        </BoxGeral>
      </Container>
    </>
  );
};
