import React, { Component, useEffect, useState } from 'react';
import api from '../../api';
import { NavbarMenuContratada } from '../../components/NavbarMenuContratada';
import { PendentePropostaContratada } from '../../components/PendentePropostaContratada';
import {
  BotoesCelia,
  Container,
  DivBordPendente,
  DivBotaoDetalhes,
  DivDetalhes,
  DivGeral,
  DivGeralDetalhes,
  DivGeralPendentes,
  DivLinha,
  DivObservacao,
  DivPendente,
  DivTexto1,
  DivTexto2,
  DivBotoes,
  Title,
} from './styles';
import { DetalhesProps } from '../../components/DetalhesProposta';



export const PropostaContratada = () => {
  const [notifi, SetNotifi] = useState([])
  const [notifiId, setNotifiId] = useState([])
  const [firstNotifi, setFirstNotifi] = useState([0]);
  const [contratante, setContratante] = useState([]);
  var usuario = localStorage.getItem('contratado');
  var contratado = JSON.parse(usuario);

  const handler = () => {
    window.location.href = 'http://localhost:8080/darlingjob/contrato/txt';
  };


  console.log(contratado);
  useEffect(() => {
    async function getById() {
      const resposta = await api.get(`/darlingjob/contrato`)
      SetNotifi(resposta.data)
      setFirstNotifi(resposta.data[0]);
    }

    async function getDetalhes() {
      const respostaContratante = await api.get(`/darlingjob/contratante/${firstNotifi.idContratante}`)
      setContratante(respostaContratante.data)
      console.log(contratante)
  
    }

    getById();
    getDetalhes();
  }, []);

  async function importTxt(importacao) {
    try {
      console.log(importacao)
      var bodyImport = new FormData();
      bodyImport.append('file', importacao[0]);
      await api.post(`/darlingjob/contrato/import`, bodyImport, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert("Import no banco feito com sucesso");

    } catch (error) {
      console.log(error.message);
    }

  }

  async function aceitarProposta() {
    api.get(`/darlingjob/contrato/${firstNotifi.id}/true`)

  }

  async function negarProposta() {
    api.get(`/darlingjob/contrato/${firstNotifi.id}/false`)
  }

  async function exportTxt() {
    const resposta = await api.get(`/darlingjob/contrato/txt`)
      .then((resposta) => {
        alert("Exportado com sucesso!");
        handler()
      }).catch((erro) => {
        console.log("Erro ao exportar.");
      });
  }

  return (
    <>
      <NavbarMenuContratada />
      <Container>
        <Title>
          <h1>Proposta</h1>
        </Title>
        <DivGeral>
          <DivPendente>
            <DivGeralPendentes>
              <DivBordPendente>
                <h1>Pendentes</h1>
              </DivBordPendente>
            </DivGeralPendentes>
            <BotoesCelia>
              <button onClick={exportTxt} id='export'>Exportar</button>
              <button onClick={importTxt} id='import'>Importar</button>
              <input
              type="file" accept=".txt, .md, .markdown" onChange={(e) => importTxt(e.target.files)}></input>
            </BotoesCelia>

            {
              notifi.map(dados => {
                return (
                  <>
                    <PendentePropostaContratada
                      categoria={dados.categoria}
                    />
                  </>
                )
              })
            }

          </DivPendente>
          <DivLinha />

          {(() => {
            if (firstNotifi != null) {
                return (
                  <>
                    <DetalhesProps
                      nome={contratante.nome}
                      categoriaa={firstNotifi.categoria}
                      endereco={firstNotifi.endereco}
                      dia={firstNotifi.data}
                      valor={firstNotifi.valor}
                    />
                  </>
                )
            }
            return null;
          })()}

          <DivBotoes>
            <button onClick={aceitarProposta} id="buttonRec">Negar</button>
            <button onClick={negarProposta} id="buttonAct">Aceitar</button>
          </DivBotoes>
        </DivGeral>
      </Container>
    </>
  );
};
