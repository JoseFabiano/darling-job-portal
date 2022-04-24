import React, { useState, useEffect } from 'react';
import { NavbarMenuContratante } from '../../components/NavbarMenuContratante';
import {
  Container,
  DivContainer,
  DivGeral,
  DivPerfil,
  DivTexto,
} from '../BuscaDiarista/styles';
import { Profissionais } from '../../components/DivProfissionais';

import api from '../../api';
import { BuscaCozinheira } from '../BuscaCozinheira';
import { strictEqual } from 'assert';

export const BuscaBaba = () => {
  const [usuarioBuscado, SetUsuarioBuscado] = useState([]);
  const data = new Date().getFullYear();
  let baba = 'Babá';
  useEffect(() => {
    async function buscarServico() {
      const { data } = await api.get(
        `http://34.235.26.14:8080/profissional/buscar-servico/${baba}`
      );
      SetUsuarioBuscado(data);

      if (Object.keys(data).length === 0) {
        alert('Nenhum usuario encontrado');
      }
    }

    buscarServico();
  }, []);

  return (
    <>
      <NavbarMenuContratante />
      <Container>
        <DivTexto>
          <h1>Babá</h1>
        </DivTexto>
        <DivGeral>
          <DivContainer>
            <DivPerfil>
              {usuarioBuscado.map((babas, index) => {
                return (
                  <>
                    <Profissionais
                      idContratado={babas.idContratado}
                      nome={babas.nome}
                      dataNascimento={
                        data -
                        parseInt(
                          babas.dataNascimento.toString().substring(6, 10)
                        )
                      }
                      tipoServico={babas.tipoServico}
                    />
                  </>
                );
              })}
            </DivPerfil>
          </DivContainer>
        </DivGeral>
      </Container>
    </>
  );
};
