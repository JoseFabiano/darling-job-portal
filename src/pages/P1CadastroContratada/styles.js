import styled from 'styled-components';

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

export const BoxSeta = styled.div`
@media screen and (min-width: 1024px){

  width: 25%;

  h1 {
    float: right;
    font-size: 4vh;
    padding-top: 2.7vh;
  }
}
`;

export const Line = styled.div`
@media screen and (min-width: 1024px){
  width: 80%;
  height: 0.5vh;
  margin-bottom: 7vh;

  background: var(--yellow);
}
`;

export const BoxCadastro = styled.div`
  width: 50%;
  height: 70vh;
  border-radius: 12vh 0vh 0vh 12vh;
  background-color: var(--gray);

  @media screen and (min-width: 1024px){
  #seta {
    padding-left: 5vh;
    padding-top: 3vh;
  }

  #textoCadastrar {
    font-size: 6vh;
    text-align: center;
  }

  #redes {
    padding-left: 11vh;
    padding-top: 3vh;
  }

  #textoOu {
    padding-left: 22vh;
    font-size: 4vh;
    padding-top: 1vh;
  }

  #msgErro {
    font-size: 2.5vh;
    text-align: center;
  }
}
`;

export const BoxLogin = styled.div`
  width: 50%;
  height: 70vh;
  border-radius: 0vh 12vh 12vh 0vh;
  float: right;
  background-color: var(--yellow);
`;

export const BoxForm1 = styled.div`
  width: 100%;
  width: 30vh;
  padding-left: 12vh;

  @media screen and (min-width: 1024px){
  button {
    width: 121%;
    height: 5vh;
    background-color: var(--yellow);
    border: 0.5vh solid var(--black);
    border-radius: 2vh;
    font-size: 3vh;
    margin-top: 9vh;
    margin-left: 16vh;
  }
}
`;

export const BoxInput = styled.div`
  width: 150%;
  height: 6vh;

  margin-right: 5vh;
 
  @media screen and (min-width: 1024px){
  input {
    width: 208%;
    height: 5vh;
    padding: 1.5vh;
    border: 0.5vh solid var(--black);
    border-radius: 2vh;
    font-size: 2vh;
  }
  h3 {
    padding-bottom: 1vh;
    font-size: 3vh;
    margin-left: 0.5vh;
  }

  #senha {
    margin-top: 7vh;
  }
}
`;

export const BoxForm = styled.div`
  width: 100%;
  height: 20vh;
  margin-top: 22vh;
  text-align: center;

  @media screen and (min-width: 1024px){
  h1 {
    font-size: 6vh;
  }
  h2 {
    font-size: 4.5vh;
  }

  button {
    width: 51%;
    height: 7vh;
    background-color: var(--blue);
    border: 0.5vh solid var(--black);
    border-radius: 4vh;
    font-size: 3vh;
    margin-top: 2vh;
    color: var(--white);
  }
}
`;
