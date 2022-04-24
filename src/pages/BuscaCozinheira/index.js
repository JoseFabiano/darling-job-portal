import { Link } from 'react-router-dom';
import api from '../../api';
import { useEffect, useState } from 'react';
import { Profissionais } from '../../components/DivProfissionais';
import { NavbarMenuContratante } from '../../components/NavbarMenuContratante';
import {
  Container,
  DivContainer,
  DivContainer1,
  DivContainer2,
  DivGeral,
  DivPerfil,
  DivProfissionais,
  DivProfissionais2,
  DivTexto,
} from '../BuscaDiarista/styles';

export const BuscaCozinheira = (props) => {
  console.log(props);
  const [usuarioBuscado, SetUsuarioBuscado] = useState([]);
  const data = new Date().getFullYear();
  let cozinheira = 'Cozinheira';
  useEffect(() => {
    async function buscarServico() {
      const { data } = await api.get(
        `http://34.235.26.14:8080/profissional/buscar-servico/${cozinheira}`
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
          <h1>Cozinheira</h1>
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
