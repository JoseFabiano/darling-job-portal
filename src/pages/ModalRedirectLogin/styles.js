import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  opacity: 0.4;
  background-color: black;
`;

export const Modal = styled.div`
@media screen and (min-width: 1024px){
  width: 70vh;
  height: 70vh;
  background-color: var(--white);
  top: 50%;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  border-radius:5vh;
  font-weight: bold;
 
  #quest{
    position:absolute;
    font-size: 3vh;
    left: 8vh;
    top: 23vh;
  }

  #logo{
    width: 20vh;
    left: 25vh;
    top: 3vh;
    position: absolute;
  }

  #button1{
    position: absolute;
    top: 30vh;
    height: 35vh;
    width: 34.5vh;
    background: var(--white);
    border: none;
    font-size: 3vh;
    font-weight: bold;
  }

  #button2{
    position: absolute;
    top: 30vh;
    height: 35vh;
    width: 34.5vh;
    left: 35vh;
    background: var(--white);
    border: none;
    font-size: 3vh;
    font-weight: bold;
  }
}
  `;

export const Linha = styled.div `
@media screen and (min-width: 1024px){
  width: 0.2vh;
  height: 35vh;   
  background: var(--yellow);
  position: absolute;
  left: 34.4vh;
  top: 30vh;
}
`;