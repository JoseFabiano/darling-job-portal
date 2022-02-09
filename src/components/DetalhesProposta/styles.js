import styled from 'styled-components';

export const DivDetalhes = styled.div`
  width: 50%;
  height: 83vh;
  margin-top: -83vh;
  border-radius: 0px 30px 30px 0px;
  float: right;
`;

export const DivGeralDetalhes = styled.div`
  width: 100%;
  height: 15vh;
`;

export const DivTexto1 = styled.div`
  width: 90%;
  height: 18vh;
  margin-top: 12vh;
  margin-left: 3vh;
  padding: 2vh;
  margin-bottom: 4vh;

  h1 {
    font-size: 4.5vh;
  }
`;

export const DivTexto2 = styled.div`
  width: 83%;
  height: 5vh;
  margin-bottom: 3vh;
  margin-left: 5.5vh;

  #catego {
    margin-top: 2vh;
  }
`;

export const DivBotaoDetalhes = styled.div`
  width: 38%;
  height: 7vh;
  margin-left: 18.8vh;
  margin-top: 6vh;

  button {
    width: 98%;
    height: 6.5vh;
    font-size: 4vh;
    border-radius: 14px;
    color: var(--yellow);
    background-color: var(--blue);
  }
`;