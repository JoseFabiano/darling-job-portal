import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--gray);
`;

export const BoxGeral = styled.div`
  width: 94%;
  height: 100vh;
  margin-left: 6vh;
`;

export const BoxUsuario = styled.div`
  @media screen and (min-width: 1024px) {
    width: 67%;
    height: 30vh;
    display: flex;

    #perfil {
      margin-top: 6vh;
      height: 17vh;
      padding-left: 6vh;
    }

    #online {
      margin-left: -4vh;
      margin-top: 18vh;
      height: 4vh;
    }

    h1 {
      padding-top: 7vh;
      margin-left: -41.5vh;
      font-size: 4vh;
    }

    #bemVinda {
      padding-top: 14vh;
      margin-left: -73vh;
    }

    #edit {
      height: 5vh;
      margin-left: 40vh;
      margin-top: 14.5vh;
    }
  }
`;

export const TextBemVinda = styled.div`
  width: 80%;
  height: 40%;
`;

export const TextNome = styled.div`
  width: 80%;
  height: 40%;
`;

export const Descricao = styled.div`
  @media screen and (min-width: 1024px) {
    width: 63%;
    background: var(--white);
    border-radius: 5vh;
    margin-top: -3vh;
    margin-left: 3vh;
    padding: 2vh;

    h1 {
      text-align: center;
      font-size: 4vh;
    }
  }
`;
export const DivAvali = styled.div`
  @media screen and (min-width: 1024px) {
    width: 30%;
    height: 91vh;
    float: right;
    margin-top: -42vh;
    margin-right: 3vh;
    border-radius: 5vh;
    text-align: center;
    background-color: var(--white);

    #nome {
      font-size: 5vh;
      margin-top: 2.4vh;
    }

    #descricao {
      font-size: 2.5vh;
    }
  }
`;

export const DivSuaAvali = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 12vh;
    border-radius: 5vh 5vh 0vh 0vh;
    background-color: var(--yellow);

    h1 {
      font-size: 3.5vh;
      text-align: center;
      padding-top: 3vh;
    }
  }
`;
export const DivServPrest = styled.div`
  @media screen and (min-width: 1024px) {
    width: 63%;
    height: 44vh;
    margin-top: 5vh;
    margin-left: 3vh;
    border-radius: 5vh;
    background-color: var(--white);
  }
`;
export const DivPrestServ = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 10vh;
    border-radius: 5vh 5vh 0vh 0vh;
    text-align: center;
    background-color: var(--yellow);

    h1 {
      padding-top: 2vh;
      font-size: 3.8vh;
    }
  }
`;
export const DivServicos = styled.div`
  width: 80%;
  height: 30vh;
  @media screen and (min-width: 1024px) {
    #bolaAzul1 {
      margin-left: 5vh;
      margin-top: 3vh;
      width: 3vh;
    }

    #bolaAzul {
      margin-left: 5vh;
      margin-top: 1.5vh;
      width: 3vh;
    }

    h1 {
      padding-left: 8.5vh;
      margin-top: -5.6vh;
      font-size: 4vh;
    }

    button {
      width: 39%;
    height: 6vh;
    display: inline-block;
    background-color: var(--blue);
    color: var(--yellow);
    border-radius: 2vh;
    font-size: 3vh;
    margin-right: -21vh;
    margin-top: -3vh;
    float: right;
    }
  }
`;

export const DivEstrelas = styled.div`
  width: 80%;
  height: 5vh;
  @media screen and (min-width: 1024px) {
    #estrelas {
      width: 21vh;
      margin-top: -9vh;
      padding-left: 1vh;
      margin-left: 8vh;
    }

    #estrelas2 {
      width: 21vh;
      margin-top: -9.1vh;
      padding-left: 1vh;
      margin-left: 8vh;
    }
  }
`;
