import styled from 'styled-components';

export const Container = styled.div`
  width: 96.6%;
  height: 100vh;
  margin-left: 7vh;
  background-color: var(--gray);
`;

export const DivTexto = styled.div`
  @media screen and (min-width: 1024px) {
    width: 95.6%;
    height: 5vh;
    text-align: center;

    h1 {
      font-size: 5vh;
      padding-top: 1vh;
      color: var(--yellow);
    }
  }
`;

export const DivGeral = styled.div`
  width: 23%;
  height: 80vh;
`;

export const DivContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 84vh;
    border-radius: 5vh;
    margin-top: 6vh;
    margin-left: 10vh;
    display: inline-block;
    justify-content: space-around;
    background-color: var(--white);
  }
`;

export const DivContainer1 = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 42vh;
    /* background-color: blue; */
    display: flex;
    justify-content: space-around;
  }
`;

export const DivProfissionais = styled.div`
  @media screen and (min-width: 1024px) {
    width: 23%;
    height: 34vh;
    margin-top: 4vh;
    border-radius: 5vh;
    background-color: var(--blue);

    #perfil {
      margin-left: 12vh;
      margin-top: 3vh;
      width: 15vh;
    }

    h1 {
      font-size: 2.7vh;
      padding-left: 5.6vh;
      color: var(--white);
    }

    #idade {
      margin-left: 20vh;
      margin-top: -4.6vh;
    }

    #estrelas {
      width: 46%;
      margin-top: -8vh;
      margin-left: 5vh;
      display: grid;
    }
  }
`;

export const DivContainer2 = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 42vh;
    display: flex;
    justify-content: space-around;
  }
`;

export const DivProfissionais2 = styled.div`
  @media screen and (min-width: 1024px) {
    width: 23%;
    height: 34vh;
    margin-top: 4vh;
    border-radius: 5vh;
    background-color: var(--blue);

    #perfil {
      margin-left: 12.5vh;
      margin-top: 3vh;
      width: 15vh;
    }

    h1 {
      font-size: 3vh;
      padding-left: 2.6vh;
      color: var(--white);
    }

    #idade {
      margin-left: 20vh;
      margin-top: -4.6vh;
    }

    #estrelas {
      width: 46%;
      margin-top: -8vh;
      margin-left: 3vh;
    }
  }
`;
