import { Link } from 'react-router-dom';
import { NavbarMenuContratante } from '../../components/NavbarMenuContratante';
import { PendenteProposta } from '../../components/PendentePropostaContratante';
import {
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
  Title,
} from './styles';

export const PropostaContratante = () => {

  return (
    <>
      <NavbarMenuContratante />
      <Container>
        <Title>
          <h1>Notificações</h1>
        </Title>
        <DivGeral>
          <DivPendente>
            <DivGeralPendentes>
              <DivBordPendente>
                <h1>Todas</h1>
              </DivBordPendente>
            </DivGeralPendentes>
            <PendenteProposta />
            
          </DivPendente>
          <DivLinha />

          <DivDetalhes>
            <DivGeralDetalhes>
              <DivTexto1>
                <h1>Solicitação de serviço aceita!</h1>
              </DivTexto1>
              <DivTexto2 id="aceito">
                <h1>Nora Batista aceitou a solicitação de serviço.</h1>
              </DivTexto2>
              <DivTexto2>
                <h1 id="catego">Categoria: Diarista</h1>
              </DivTexto2>
              <DivTexto2>
                <h1>Data: 24/08</h1>
              </DivTexto2>
              <DivTexto2>
                <h1>Valor: R$300,00 </h1>
              </DivTexto2>
              <DivBotaoDetalhes>
                <Link to="">
                  <button>Cancelar</button>
                </Link>
                <Link to="/ajudaProposta">
                  <button id="ajuda">Ajuda</button>
                </Link>
              </DivBotaoDetalhes>
            </DivGeralDetalhes>
          </DivDetalhes>
        </DivGeral>
      </Container>
    </>
  );
};
