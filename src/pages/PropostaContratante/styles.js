import styled from 'styled-components';

export const Container = styled.div`
  width: 96.6%;
  height: 100vh;
  margin-left: 7vh;

  background: var(--gray);
`;

export const Title = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    padding-bottom: 1vh;
    padding-top: 2vh;
    padding-bottom: 2vh;

    h1 {
      font-size: 5vh;
      color: var(--yellow);
      padding-left: 42%;
    }
  }
`;

export const DivGeral = styled.div`
  width: 88%;
  height: 83vh;
  margin-left: 4%;
  border-radius: 5vh;
  background: var(--white);
`;
export const DivPendente = styled.div`
  width: 50%;
  height: 83vh;
  border-radius: 5vh 0vh 0vh 5vh;
`;

export const DivGeralPendentes = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
`;

export const DivBordPendente = styled.div`
  width: 41%;
  height: 6.5vh;
  border-radius: 5vh;
  margin-left: 25vh;
  margin-top: 5vh;
  background-color: var(--blue);

  @media screen and (min-width: 1024px) {
    h1 {
      text-align: center;
      font-size: 3.6vh;
      margin-top: 0.3vh;
      color: var(--yellow);
    }
  }
`;

export const DivDetalhes = styled.div`
  width: 50%;
  height: 83vh;
  margin-top: -83vh;
  border-radius: 0vh 5vh 5vh 0vh;
  float: right;
`;

export const DivGeralDetalhes = styled.div`
  width: 100%;
  height: 15vh;
`;

export const DivTexto1 = styled.div`
  width: 90%;
  height: 18vh;
  margin-top: 10vh;
  margin-left: 3vh;
  padding: 2vh;
  margin-bottom: 1vh;
  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 4.5vh;
    }
  }
`;

export const DivTexto2 = styled.div`
  width: 83%;
  height: 5vh;
  margin-left: 5.5vh;
  font-size: 2vh;
  @media screen and (min-width: 1024px) {
    #aceito {
      margin-top: 2vh;
    }

    #catego {
      margin-top: 8vh;
    }
  }
`;

export const DivBotaoDetalhes = styled.div`
  width: 38%;
  height: 7vh;
  margin-left: 18.8vh;
  margin-top: 5vh;
  @media screen and (min-width: 1024px) {
    button {
      width: 98%;
      height: 6.5vh;
      font-size: 4vh;
      border-radius: 3vh;
      color: var(--yellow);
      background-color: var(--blue);
      font-weight: bolder;
    }

    #ajuda {
      margin-top: 1vh;
    }
  }
`;
export const DivLinha = styled.div`
  @media screen and (min-width: 1024px) {
    width: 0.3%;
    height: 67vh;
    float: right;
    position: fixed;
    margin-top: -74vh;
    margin-left: 90vh;
    background-color: var(--blue);
  }
`;
