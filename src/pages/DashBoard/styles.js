import styled from 'styled-components';

export const Container = styled.div`
@media screen and (min-width: 1024px){
  width: 96.6%;
  height: 100vh;
  margin-left: 7vh;
  background: var(--gray);
  display: flex;
  flex-direction: column;
}
  `;

export const Titulo = styled.div`
 @media screen and (min-width: 1024px){
 width: 100%;
  height: 10vh;
  padding-top: 1vh;
  font-size: 2.5vh;
  display: flex;
  justify-content: center;
  background-color: var(--gray);
 }
  `;

export const DivGrafico = styled.div`
  @media screen and (min-width: 1024px){
  width: 100%;
  height: 44vh;
  background-color: var(--gray);
  display: flex;
  justify-content: center;
  }
  `;

export const BackgroundGrafico = styled.div`
  @media screen and (min-width: 1024px){
  width: 90%;
    height: 44vh;
    background: var(--white);
    border-radius: 3vh;
  display: flex;
  align-items: center;
  }
  `;

export const BackgroundInformacoesGrafico = styled.div`
  @media screen and (min-width: 1024px){
  width: 30%;
  height: 44vh;
  background-color: var(--blue);
  border-radius: 3vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    color: white;
    text-align: center;
    font-size: 2.7vh;
    font-weight: bolder;
  }
}
`;

export const Grafico = styled.div`
 @media screen and (min-width: 1024px){
 margin-top: 11vh;
  width: 70%;
  height: 55vh;
  background-color: var(--white);
 }
  `;

export const DivGastos = styled.div`
  @media screen and (min-width: 1024px){
  width: 100%;
  height: 50vh;
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  `;

export const GastosFixos = styled.div`
   @media screen and (min-width: 1024px){
   width: 90%;
    height: 23vh;
    background-color: var(--white);
    margin-top: 1vh;
    border-radius: 1vh 1vh 0vh 0vh;
  display: flex;
   }
  `;

export const TituloGastosFixos = styled.div`
    @media screen and (min-width: 1024px){
    width: 55%;
    height: 6vh;
    font-size: 2.5vh;
    background-color: var(--white);
    border-top-left-radius: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    }
  `;

export const SelectGastosFixos = styled.div`
  @media screen and (min-width: 1024px){
  width: 45%;
  height: 19vh;
  background-color: var(--white);
  border-top-right-radius: 1vh;
  display: flex;
  justify-content: flex-end;
  }
  `;

export const GastosFuturos = styled.div`
  @media screen and (min-width: 1024px){
  width: 90%;
  height: 22vh;
  background-color: var(--blue);
  border-radius: 0vh 0vh 1vh 1vh;
  display: flex;
  justify-content: flex-end;
  }
  `;

export const TituloGastosFuturos = styled.div`
  @media screen and (min-width: 1024px){
  width: 60%;
  height: 6vh;
  background-color: var(--blue);
  border-top-left-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  }
`;

export const SelectGastosFuturos = styled.div`
@media screen and (min-width: 1024px){
width: 45%;
  height: 6vh;
  background-color: var(--blue);
  border-top-right-radius: 6px;
  display: flex;
  justify-content: flex-end;
}
  `;
