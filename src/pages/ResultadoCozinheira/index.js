import { useEffect, useState } from 'react';
import api from '../../api'
import { Link } from 'react-router-dom';
import { NavbarMenuContratada, NavbarMenuContratante } from '../../components/NavbarMenuContratante';

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
  TextNome,
  TextBemVinda,
} from '../../pages/ResultadoCozinheira/styles';

export const ResultadoCozinheira = () => {

  const [usuarioBuscado, SetUsuarioBuscado] = useState([]);
  const [nome, setNome] = useState();

  sessionStorage.idProposta = sessionStorage.id;

  useEffect(() => {
    async function buscarServico() {
      const { data } = await api.get(`http://localhost:8080/darlingjob/contratado/${sessionStorage.id}`);
      SetUsuarioBuscado(data)
      setNome(data.nome);
      console.log(data)
      console.log(nome)

    }

    buscarServico()
  }, []);

  return (
    <>
      <Container>
        <NavbarMenuContratante />
        <BoxGeral>
          <BoxUsuario>
            <img src="perfil.svg" alt="imagem de perfil-contratada" id="perfil" />
            <img src="online.svg" alt="sinal-online" id="online" />
            <img src="engrenagem.svg" alt="logo-edição" id="edit" />
            <TextNome>
              <h1>Olá {nome}</h1>
            </TextNome>
            <TextBemVinda>
              <h1 id="bemVinda">Bem vinda de volta!</h1>
            </TextBemVinda>
          </BoxUsuario>
          <Descricao>
            <h1>
              Sou profissional da categoria Família, e faço serviços relacionados a
              Cozinheira, Diarista, Lavadeira. Estou localizado no bairro Santo
              Amaro em São Paulo.
            </h1>
          </Descricao>
          <DivAvali>
            <DivSuaAvali>
              <h1>Suas Avaliações</h1>
            </DivSuaAvali>
            <h1 id="nome">Cristina</h1>
            <h1 id="descricao">Fui muito bem atendida com um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro. Obrigada!</h1>
            <h1 id="nome">José</h1>
            <h1 id="descricao">O trabalho prestado pelo profissional foi excelente. Recomendo!</h1>
            <h1 id="nome">Lucas</h1>
            <h1 id="descricao">Excelentes profissionais, rápidos, honestos e com bom preços. Recomendo muito</h1>
            <h1 id="nome">Vitor</h1>
            <h1 id="descricao">Super atenciosa, Honesta e com um preço ótimo!</h1>
          </DivAvali>
          <DivServPrest>
            <DivPrestServ>
              <h1>Serviços Prestados</h1>
            </DivPrestServ>
            <DivServicos>
              <img src="bolaAzul.svg" alt="bola azul" id="bolaAzul1" /><h1>Diarista</h1>
              <DivEstrelas>
                <img src="estrelas.svg" alt="bola azul" id="estrelas" />
              </DivEstrelas>
              <img src="bolaAzul.svg" alt="bola azul" id="bolaAzul" /><h1>Cozinheira</h1>
              <DivEstrelas>
                <img src="estrelas.svg" alt="bola azul" id="estrelas" />
              </DivEstrelas>
              <img src="bolaAzul.svg" alt="bola azul" id="bolaAzul" /><h1>Babá</h1>
              <Link to="/modalProposta">
                <button>Enviar proposta</button>
              </Link>
              <DivEstrelas>
                <img src="estrelas.svg" alt="bola azul" id="estrelas2" />
              </DivEstrelas>

            </DivServicos>
          </DivServPrest>
        </BoxGeral>
      </Container>
    </>
  );
};