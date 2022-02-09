import styled from 'styled-components';

export const Container = styled.div`
  width: 96.5%;
    height: 100vh;
    margin-left: 7vh;
  background-color: var(--gray);
`;

export const DivGeral = styled.div`
  width: 96.6%;
    height: 83vh;
    padding-top: 8vh;
    margin-left: 6vh;
    display: flex;
    justify-content: center;
`;

export const BoxChat = styled.div`
  width: 123vh;
  height: 83vh;
  border-radius: 5vh;
  background: var(--white);
  z-index: 1;
`;

export const BoxAzul = styled.div`
@media screen and (min-width: 1024px){
  height: 83vh;
  border-radius: 5vh 0vh 0vh 5vh;
  width: 35vh;
  background: var(--blue);

  h1 {
    font-weight: bold;
    color: var(--yellow);
    font-size: 5vh;
    text-align: center;
    position: relative;
    top: 1vh;
  }
}
`;

export const DivChat = styled.div`
  float: right;
  position: relative;
  left: -9%;
  top: -9%;

  @media screen and (min-width: 1024px){
  #InputChat {
    width: 65vh;
    height: 6vh;
    border-radius: 3vh;
    color: black;
    font-weight: bold;
    font-size: 4vh;
    border: 0.5vh solid black;
    padding: 2vh;
  }

  #send-image {
    margin-top: 0.3vh;
    position: absolute;
    height: 5vh;
    margin-left: 2vh;
  }

  #picture-image {
    position: absolute;
    height: 7vh;
    right: 67vh;
    top: -0.6vh;
  }
}
`;

export const DivCaixaContratante = styled.div`
  @media screen and (min-width: 1024px){
  background-color: var(--dark-gray);
  border-radius: 2vh;
  width: 42vh;
  height: 15vh;
  position: relative;
  left: 79vh;
  bottom: 74vh;

  
  p {
    font-size: 2.7vh;
    color: var(--white);
    font-weight: bold;
    margin: 1vh;
  }
}
`;

export const DivBoxUsuarios = styled.div`
  position: absolute;
  height: 70vh;
  width: 35vh;
`;

export const DivUsuario = styled.div`
  width: 35vh;
  height: 8vh;
  position: absolute;
  top: 5vh;

  @media screen and (min-width: 1024px){
  #online {
    position: absolute;
    top: 2.8vh;
    left: 1.5vh;
    width: 3vh;
  }

  #userIcon {
    width: 8vh;
    position: absolute;
    top: 0vh;
    left: 5vh;
  }

  #userName {
    font-size: 3.3vh;
    font-weight: bold;
    position: absolute;
    left: 13vh;
    top: 1.6vh;
    color: white;
  }
  }
  `;

export const DivUsuario1 = styled.div`
  width: 35vh;
  height: 8vh;
  position: absolute;
  top: 18vh;

  @media screen and (min-width: 1024px){
  #online {
    position: absolute;
    top: 2.8vh;
    left: 1.5vh;
    width: 3vh;
  }

  #userIcon {
    width: 8vh;
    position: absolute;
    top: 0vh;
    left: 5vh;
  }

  #userName {
    font-size: 3.3vh;
    font-weight: bold;
    position: absolute;
    left: 13vh;
    top: 1.6vh;
    color: white;
  }
  }
`;
export const DivUsuario2 = styled.div`
  width: 35vh;
  height: 8vh;
  position: absolute;
  top: 32vh;

  @media screen and (min-width: 1024px){
  #online {
    position: absolute;
    top: 2.8vh;
    left: 1.5vh;
    width: 3vh;
  }

  #userIcon {
    width: 8vh;
    position: absolute;
    top: 0vh;
    left: 5vh;
  }

  #userName {
    font-size: 3.3vh;
    font-weight: bold;
    position: absolute;
    left: 13vh;
    top: 1.6vh;
    color: white;
  }
}
`;

export const DivUsuario3 = styled.div`
  width: 35vh;
  height: 8vh;
  position: absolute;
  top: 46vh;

  @media screen and (min-width: 1024px){
  #online {
    position: absolute;
    top: 2.8vh;
    left: 1.5vh;
    width: 3vh;
  }

  #userIcon {
    width: 8vh;
    position: absolute;
    top: 0vh;
    left: 5vh;
  }

  #userName {
    font-size: 3.3vh;
    font-weight: bold;
    position: absolute;
    left: 13vh;
    top: 1.6vh;
    color: white;
  }
}
`;

export const DivUsuario4 = styled.div`
  width: 35vh;
  height: 8vh;
  position: absolute;
  top: 60vh;

  @media screen and (min-width: 1024px){
  #online {
    position: absolute;
    top: 2.8vh;
    left: 1.5vh;
    width: 3vh;
  }

  #userIcon {
    width: 8vh;
    position: absolute;
    top: 0vh;
    left: 5vh;
  }

  #userName {
    font-size: 3.3vh;
    font-weight: bold;
    position: absolute;
    left: 13vh;
    top: 1.6vh;
    color: white;
  }
}
`;

export const DivTextChat = styled.div`
 @media screen and (min-width: 1024px){
 border-radius: 15px;
  width: 42vh;
  height: 15vh;
  position: relative;
  bottom: 74vh;
  left: 37vh;

  #spanTxt {
    height: 15vh;
    width: 42vh;
    border-radius: 15px;
    font-size: 2.7vh;
    font-weight: bold;
  }
}
`;

export const DivNomeChat = styled.div`
 @media screen and (min-width: 1024px){
 position: absolute;
  width: 60vh;
  height: 5vh;
  top: 10vh;
  right: 19vh;
  text-align: center;

  #spanNome {
    font-size: 4vh;
    font-weight: bold;
  }
 }
  `;
