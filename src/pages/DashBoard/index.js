import React from 'react';
import { NavbarMenuContratada } from '../../components/NavbarMenuContratada';
import {
  BackgroundGrafico,
  BackgroundInformacoesGrafico,
  TituloGastosFuturos,
  SelectGastosFuturos,
  SelectGastosFixos,
  Container,
  DivGastos,
  DivGrafico,
  GastosFixos,
  GastosFuturos,
  Grafico,
  Titulo,
  TituloGastosFixos,
} from './styles';
import VerticalBar from './VerticalBarChart';
import Editar from './editar.png';
import EditarFuturo from './editarfuturo.png';

export const DashBoard = () => {
  return (
    <>
      <NavbarMenuContratada />
      <Container>
        <Titulo>
          <h1 style={{ color: '#DAA520' }}>
            Gestão Financeira
          </h1>
        </Titulo>

        <DivGrafico>
          <BackgroundGrafico>
            <BackgroundInformacoesGrafico>
              <p id="teste">
                Total de trabalhos:
                <br />
                <b>12</b>
              </p>

              <p id="teste">
                Renda líquida:
                <br />
                <b>R$ 1000,00</b>
              </p>

              <p id="teste">
                Média diária:
                <br />
                <b>R$ 200,00</b>
              </p>
            </BackgroundInformacoesGrafico>

            <Grafico>
              <VerticalBar />
            </Grafico>
          </BackgroundGrafico>
        </DivGrafico>
        <DivGastos>
          <GastosFixos>
            <TituloGastosFixos>
              <h2 style={{ margin: '1vh', fontWeight: 'bolder' }}>
                Controle financeiro
              </h2>

              <h1
                style={{
                  marginTop: '1vh',
                  color: '#3B4664',
                  fontWeight: 'bolder',
                }}
              >
                Gastos Fixos
              </h1>
            </TituloGastosFixos>
            <SelectGastosFixos>
              <select
                name="dob-month"
                style={{
                  height: '4vh',
                  width: '14vh',
                  marginTop: '1.6vh',
                  color: '#FFFFFF',
                  backgroundColor: '#3B4664',
                  borderRadius: '3vh',
                  textAlign: 'center',
                  fontSize: '1.8vh',
                  fontWeight: 'bolder',
                }}
                class="datefield month"
              >
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
              </select>

              <img src={Editar} style={{ height: '5vh', margin: '1vh' }} />
            </SelectGastosFixos>
          </GastosFixos>

          <GastosFuturos>
            <TituloGastosFuturos>
              <h1
                style={{
                  marginTop: '1vh',
                  color: '#DAA520',
                  fontWeight: 'bolder',
                  fontSize: '5.2vh'
                }}
              >
                Gastos Futuros
              </h1>
            </TituloGastosFuturos>
            <SelectGastosFuturos>
              <img
                src={EditarFuturo}
                style={{ height: '5vh', margin: '1vh' }}
              />
            </SelectGastosFuturos>
          </GastosFuturos>
        </DivGastos>
      </Container>
    </>
  );
};
