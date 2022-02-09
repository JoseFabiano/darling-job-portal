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
  width: 100%;
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
    margin-top: 7vh;
    margin-left: 3vh;
    font-size: 4vh;
  }

  #bemVinda {
    margin-top: 15vh;
    margin-left: -38.6vh;
  }

  #edit {
    height: 5vh;
    margin-left: 2vh;
    margin-top: 15.5vh;
  }

  #estrelasP {
    width: 22vh;
    margin-top: -10vh;
    margin-left: 1vh;
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
`;
export const DivAvali = styled.div`
  @media screen and (min-width: 1024px) {
    width: 30%;
    height: 91vh;
    float: right;
    margin-top: -45vh;
    margin-right: 3vh;
    border-radius: 5vh;
    text-align: center;
    background-color: var(--white);

    #nome {
      font-size: 4vh;
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
  width: 63%;
  height: 20vh;
  margin-top: 3vh;
  margin-left: 3vh;
  border-radius: 5vh;
  background-color: var(--white);
`;
export const DivPrestServ = styled.div`
  width: 100%;
  height: 8vh;
  border-radius: 5vh 5vh 0vh 0vh;
  text-align: center;
  background-color: var(--yellow);

  h1 {
    padding-top: 1vh;
    font-size: 3.8vh;
  }
`;
export const DivServicos = styled.div`
  display: flex;
  width: 80%;
  height: 30vh;

  #bolaAzul1 {
    width: 3vh;
    margin-left: 7vh;
    margin-top: -20vh;
  }

  #bolaAzul2 {
    width: 3vh;
    margin-left: 7vh;
    margin-top: -20vh;
  }

  #bolaAzul {
    width: 3vh;
    margin-left: 8vh;
    margin-top: -20vh;
  }

  #destaque {
    padding-left: 1vh;
    margin-top: 2.4vh;
    font-size: 3.5vh;
  }

  h1 {
    width: 30%;
    height: 5vh;
  }
`;

export const DivTexto = styled.div`
  #comodos {
    padding-top: 7vh;
    margin-left: -22.8vh;
    font-size: 3vh;
  }

  #qtdComodos {
    margin-left: -7vh;
    margin-right: -4vh;
    font-size: 3vh;
  }

  #rFilhos {
    padding-top: 7vh;
    margin-left: -22.7vh;
    font-size: 3vh;
  }
`;

export const DivEndereco = styled.div`
  width: 63%;
  height: 20vh;
  margin-top: 3vh;
  margin-left: 3vh;
  border-radius: 5vh;
  background-color: var(--white);
`;

export const DivTextoEndereco = styled.div`
  width: 100%;
  height: 8vh;
  border-radius: 5vh 5vh 0vh 0vh;
  text-align: center;
  background-color: var(--yellow);

  h1 {
    padding-top: 1vh;
    font-size: 3.8vh;
  }
`;

export const DivEnderecoContratante = styled.div`
  #bolaAzul1 {
    width: 3vh;
    margin-left: 7vh;
    margin-top: -20vh;
  }

  h1 {
    font-size: 4vh;
  }

  #tComplemento {
    padding-left: 28%;
  }

  #complemento {
    padding-left: 65vh;
    margin-top: -6.3vh;
  }

  #endereco {
    text-align: center;
  }
`;
