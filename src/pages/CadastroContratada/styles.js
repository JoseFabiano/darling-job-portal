import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: var(--blue);
`;

export const SelecionarOpcao = styled.div`
width: 100%;
background: var(--yellow);
text-align: center;

input {
  margin-left: 5px;
  margin-right: 5px;
}

span {
  font-size: 3vh;
  color: var(--gray);
}
`

export const Title = styled.div`
  padding-top: 8vh;
  @media screen and (min-width: 1024px){
  h3 {
    color: var(--gray);
    margin-left: 10.5vh;
    margin-bottom: 4vh;
    font-size: 3vh;
  }

  #titulo2 {
    padding-top: 2vh;
    margin-bottom: 0;
  }

  #titulo3 {
    text-align: center;
  }

  #titulo4 {
    padding-top: 2vh;
    margin-bottom: 0;
  }
}
`;

export const Line = styled.div`
@media screen and (min-width: 1024px){
  width: 80%;
  height: 0.5vh;

  background: var(--yellow);
}
`;

export const Form = styled.div`
  width: 100%;
`;

export const CheckUser = styled.div`
  width: 100%;

  margin-top: 1vh;
  padding-left: 2.5%;
  @media screen and (min-width: 1024px){
  label {
    color: var(--gray);
    margin-left: 2vh;
  }

  input[type='radio'] {
    margin-right: 3vh;
    margin-left: 3vh;
  }

  input[type='radio']:after {
    width: 2.5vh;
    height: 2.5vh;
    margin-right: 1vh;
    border-radius: 5vh;
    background-color: var(--white);
    content: '';
    position: relative;
    display: inline-block;
    visibility: visible;
    border: 0.5vh solid var(--black);
  }

  input[type='radio']:checked:after {
    width: 2.5vh;
    height: 2.5vh;
    margin-right: 1vh;
    border-radius: 5vh;
    position: relative;
    background-color: var(--yellow);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 0.5vh solid var(--black);
  }
}
`;

export const BoxForm = styled.div`
  margin-top: 3vh;
  margin-left: 10vh;

  display: flex;
  @media screen and (min-width: 1024px){
  h3 {
    color: var(--gray);
    font-size: 3vh;
    padding-left: 2%;
  }
}
`;

export const BoxForm1 = styled.div`
  margin-top: 4vh;
    margin-left: 1vh;

  display: flex;
  @media screen and (min-width: 1024px){
  h3 {
    color: var(--gray);
    font-weight: normal;
    margin-bottom: 1vh;
  }
}
`;

export const BoxInput = styled.div`
  width: 34%;
  height: 6vh;

  margin-right: 5vh;
  @media screen and (min-width: 1024px){
  input {
    width: 100%;
    height: 5vh;
    padding: 1.5vh;
    outline: none;
    border: 0.5vh solid var(--black);
    border-radius: 1vh;
    font-size: 3vh;
    font-family: Arial;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
}
`;

export const BoxInput1 = styled.div`
  width: 45%;
  height: 6vh;
  padding-top: 1vh;
  padding-bottom: 7vh;

  margin-right: 5vh;
  @media screen and (min-width: 1024px){
  input {
    width: 100%;
    height: 5vh;
    padding: 1.5vh;
    outline: none;
    border: 0.5vh solid var(--black);
    border-radius: 1vh;
    font-size: 3vh;
    font-family: Arial;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
}
`;

export const CheckGender = styled.div`
  margin-top: 0px;
  margin-left: 0px;

  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px){
  label {
    color: var(--gray);
  }

  input[type='radio'] {
    margin-right: 3vh;
    margin-left: 3vh;
  }

  input[type='radio']:after {
    width: 2.5vh;
    height: 2.5vh;
    margin-right: 1vh;
    border-radius: 5vh;
    background-color: var(--white);
    content: '';
    position: relative;
    display: inline-block;
    visibility: visible;
    border: 0.5vh solid var(--black);
  }

  input[type='radio']:checked:after {
    width: 2.5vh;
    height: 2.5vh;
    margin-right: 1vh;
    border-radius: 5vh;
    position: relative;
    background-color: var(--yellow);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 0.5vh solid var(--black);
  }
}
`;

export const Gender = styled.div`
  width: 100%;

span{
  font-size: 2.5vh;
}
`;

export const BoxInput2 = styled.div`
  width: 29%;
  height: 6vh;
  /* padding-top: 2vh; */
  padding-bottom: 7vh;
  margin-right: 4.6vh;
  @media screen and (min-width: 1024px){
  input {
    width: 100%;
    height: 5vh;
    padding: 1.5vh;
    outline: none;
    border: 0.5vh solid var(--black);
    border-radius: 1vh;
    font-size: 3vh;
    font-family: Arial;
  }

  select {
    width: 100%;
    height: 5vh;
    padding-left: 2vh;
    border: 0.5vh solid var(--black);
    border-radius: 1vh;
    font-size: 3vh;
  }

  #emissor {
    width: 100%;
    outline: none;
    font-family: Arial;
  }

  #paises {
    width: 104%;
    outline: none;
    font-family: Arial;
  }

  #estado {
    outline: none;
    font-family: Arial;
  }

  #hTermino {
    margin-left: 3vh;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
}
`;

export const BoxButton = styled.div`
  width: 100%;
  margin-left: 34.5%;
  margin-top: 0.5vh;
  @media screen and (min-width: 1024px){
  button {
    width: 17%;
    height: 5vh;
    font-size: 3vh;
    background-color: var(--yellow);
    border: 0.5vh solid var(--black);
    border-radius: 1vh;
    outline: none;
  }

  #b1 {
    margin-left: 12.3vh;
  }
}
`;

export const CheckService = styled.div`
  margin-top: 1vh;
  @media screen and (min-width: 1024px){
span{
  font-size: 2.5vh;
}

  #baba {
    padding-left: 0;
  }

  label {
    color: var(--gray);
    padding-left: 4vh;
  }

  input[type='radio'] {
    margin-right: 3vh;
    margin-left: 3vh;
  }

  input[type='radio']:after {
    width: 2.5vh;
    height: 2.5vh;
    margin-right: 1vh;
    border-radius: 5vh;
    background-color: var(--white);
    content: '';
    position: relative;
    display: inline-block;
    visibility: visible;
    border: 0.5vh solid var(--black);
  }

  input[type='radio']:checked:after {
    width: 2.5vh;
    height: 2.5vh;
    margin-right: 1vh;
    border-radius: 5vh;
    position: relative;
    background-color: var(--yellow);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 0.5vh solid var(--black);
  }
}
`;

export const BoxInput3 = styled.div`
  width: 29%;
  height: 6vh;
  padding-top: 1vh;
  padding-bottom: 7vh;
  margin-right: 4.6vh;
  @media screen and (min-width: 1024px){
  input {
    width: 100%;
    height: 5vh;
    padding: 1.5vh;
    outline: none;
    border: 0.5vh solid var(--black);
    border-radius: 1vh;
    font-size: 3vh;
    font-family: Arial;
  }

  select {
    width: 100%;
    height: 4vh;
    padding: 10px;

    border: 2px solid var(--black);
    border-radius: 6px;
    font-size: 15px;
  }

  #hTerminT {
    margin-left: 15vh;
  }

  #hTermino {
    margin-left: 15vh;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
  }
`;

export const CheckSemana = styled.div`
  margin-top: 2vh;
  @media screen and (min-width: 1024px){
span{
  font-size: 2.5vh;
}

  #segunda {
    padding-left: 0;
  }

  label {
    color: var(--gray);
    padding-left: 6.5vh;
  }

  input[type='radio'] {
    margin-right: 3vh;
    margin-left: 3vh;
  }

  input[type='radio']:after {
    width: 2.5vh;
    height: 2.5vh;
    margin-right: 1vh;
    border-radius: 5vh;
    background-color: var(--white);
    content: '';
    position: relative;
    display: inline-block;
    visibility: visible;
    border: 0.5vh solid var(--black);
  }

  input[type='radio']:checked:after {
    width: 2.5vh;
    height: 2.5vh;
    margin-right: 1vh;
    border-radius: 5vh;
    position: relative;
    background-color: var(--yellow);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 0.5vh solid var(--black);
  }
}
`;

export const CheckWords = styled.span`
  color: white;
`

export const CheckFeriado = styled.div`
  margin-top: 8vh;
  @media screen and (min-width: 1024px){
span{
  font-size: 2.5vh;
}

  label {
    color: var(--gray);
  }

  input[type='radio'] {
    margin-right: 3vh;
    margin-left: 3vh;
  }

  input[type='radio']:after {
    width: 2.5vh;
    height: 2.5vh;
    margin-right: 1vh;
    border-radius: 5vh;
    background-color: var(--white);
    content: '';
    position: relative;
    display: inline-block;
    visibility: visible;
    border: 0.5vh solid var(--black);
  }

  input[type='radio']:checked:after {
    width: 2.5vh;
    height: 2.5vh;
    margin-right: 1vh;
    border-radius: 5vh;
    position: relative;
    background-color: var(--yellow);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 0.5vh solid var(--black);
  }
}
`;
