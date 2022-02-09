import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;

  background: var(--blue);

  button {
    outline: none;
  }
`;

export const BoxLine = styled.div`
  width: 100%;
  padding-top: 6vh;
  display: flex;
  justify-content: center;
`;

export const Line = styled.div`
@media screen and (min-width: 1024px){
  width: 80%;
  height: 0.5vh;
  margin-bottom: 7vh;

  background: var(--yellow);
}
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const BoxGeral = styled.div`
  display: flex;
  width: 75%;
  height: 70vh;
`;

export const BoxCadastro = styled.div`
@media screen and (min-width: 1024px){

  height: 70vh;
    width: 50%;
    border-radius: 12vh 0vh 0vh 12vh;
  background-color: var(--yellow);

  #seta {
    margin-left: 6vh;
    margin-top: 4vh;
    width: 6.5vh;
  }
}
`;

export const BoxSeta = styled.div`
@media screen and (min-width: 1024px){

  width: 38%;

  h1 {
    float: right;
    font-size: 6vh;
    padding-top: 2.7vh;
  }
}
`;

export const BoxForm = styled.div`
  width: 100%;
  height: 20vh;
  margin-top: 11vh;
  text-align: center;

@media screen and (min-width: 1024px){

  h1 {
    font-size: 6vh;
  
  }
  h2 {
    font-size: 4.5vh;
  }

  button {
    padding: 2vh 8vh 2vh 8vh;
    background-color: var(--blue);
    border: 0.5vh solid var(--black);
    border-radius: 4vh;
    font-size: 3vh;
    margin-top: 2vh;
    color: var(--white);
  }
}
`;

export const BoxLogin = styled.div`
  height: 70vh;
  width: 50%;
  border-radius: 0vh 12vh 12vh 0vh;
  float: right;
  background-color: var(--gray);
  text-align: center;

@media screen and (min-width: 1024px){

  h1 {
    padding-top: 3vh;
    font-size: 6vh;
  }

  h2 {
    font-size: 5vh;
    padding-top: 1vh;
  }

  #redes {
    padding-top: 2vh;
    width: 36vh;
  }
}
`;

export const BoxForm1 = styled.div`
  width: 100%;
  margin-top: -1vh;
  text-align: center;
  @media screen and (min-width: 1024px){

  button {
    background-color: var(--yellow);
    border: 0.5vh solid var(--black);
    border-radius: 2vh;
    font-size: 3vh;
    margin-left: 0.2vh;
    margin-top: 10vh;
    width: 24%;
    height: 5vh;
  }
}
`;

export const BoxInput = styled.div`
  width: 100%;
  height: 6vh;
  text-align: center;

  margin-right: 5vh;

@media screen and (min-width: 1024px){

  input {
    width: 64%;
    height: 5vh;
    padding: 1.6vh;
    border: 0.5vh solid var(--black);
    border-radius: 2vh;
    font-size: 2vh;
  }
  h3 {
    padding-bottom: 1vh;
    font-size: 3.5vh;
    text-align: left;
    margin-left: 14.5vh;
  }

  #senha {
    margin-top: 6vh;
  }
}
`;
