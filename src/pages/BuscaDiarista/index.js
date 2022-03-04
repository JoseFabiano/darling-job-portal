import React, { useEffect, useState } from 'react';
import api from '../../api';
import { NavbarMenuContratante } from '../../components/NavbarMenuContratante';
import {
  Container,
  DivContainer,
  DivGeral,
  DivPerfil,
  DivTexto,
} from './styles';
import { Profissionais } from '../../components/DivProfissionais';

export const BuscaDiarista = () => {
  const [usuarioBuscado, SetUsuarioBuscado] = useState([]);
  const data = new Date().getFullYear();
  let diarista = 'Diarista';
  useEffect(() => {
    async function buscarServico() {
      const { data } = await api.get(
        `http://localhost:8080/profissional/buscar-servico/${diarista}`
      );
      SetUsuarioBuscado(data);
      console.log(data);
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
          <h1>Diarista</h1>
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
