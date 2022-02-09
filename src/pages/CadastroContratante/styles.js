import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: var(--blue);
`;

export const Title = styled.div`
  padding-top: 50px;

  h3 {
    color: var(--gray);
    margin-left: 59px;
    margin-bottom: 25px;
  }

  #titulo2 {
    padding-top: 2vh;
    margin-bottom: 0;
  }

  #titulo3 {
    text-align: center;
  }
`;

export const Line = styled.div`
  width: 80%;
  height: 3px;

  background: var(--yellow);
`;

export const Form = styled.div`
  width: 100%;
`;

export const CheckUser = styled.div`
  width: 100%;

  margin-top: 35px;
  padding-left: 2.5%;

  label {
    color: var(--gray);
    margin-left: 2vh;
  }

  input[type='radio'] {
    margin-right: 20px;
    margin-left: 15px;
  }

  input[type='radio']:after {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: var(--white);
    content: '';
    position: relative;
    display: inline-block;
    visibility: visible;
    border: 2px solid var(--black);
  }

  input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border-radius: 15px;
    position: relative;
    background-color: var(--yellow);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid var(--black);
  }
`;

export const BoxForm = styled.div`
  margin-top: 20px;
  margin-left: 55px;

  display: flex;

  h3 {
    color: var(--gray);
    font-weight: normal;
    padding-left: 2%;
  }
`;

export const BoxInput = styled.div`
  width: 34%;
  height: 6vh;

  margin-right: 5vh;

  input {
    width: 100%;
    height: 5vh;
    padding: 10px;
    outline: none;
    border: 2px solid var(--black);
    border-radius: 6px;
    font-size: 18px;
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
`;

export const BoxInput1 = styled.div`
  width: 45%;
  height: 6vh;
  padding-top: 1vh;
  padding-bottom: 7vh;

  margin-right: 5vh;

  input {
    width: 100%;
    height: 5vh;
    padding: 10px;
    outline: none;
    border: 2px solid var(--black);
    border-radius: 6px;
    font-size: 18px;
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
`;

export const CheckGender = styled.div`
  margin-top: 0px;
  margin-left: 0px;

  display: flex;
  flex-direction: column;

  label {
    color: var(--gray);
  }

  input[type='radio'] {
    margin-right: 20px;
    margin-left: 15px;
  }

  input[type='radio']:after {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: var(--white);
    content: '';
    position: relative;
    display: inline-block;
    visibility: visible;
    border: 2px solid var(--black);
  }

  input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border-radius: 15px;
    position: relative;
    background-color: var(--yellow);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid var(--black);
  }
`;

export const Gender = styled.div`
  width: 100%;
`;

export const BoxInput2 = styled.div`
  width: 29%;
  height: 6vh;
  /* padding-top: 2vh; */
  padding-bottom: 7vh;
  margin-right: 4.6vh;

  input {
    width: 100%;
    height: 5vh;
    padding: 10px;
    outline: none;
    border: 2px solid var(--black);
    border-radius: 6px;
    font-size: 18px;
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

  select {
    width: 100%;
    height: 5vh;
    padding-left: 10px;

    border: 2px solid var(--black);
    border-radius: 6px;
    font-size: 15px;
  }

  #emissor {
    width: 100%;
    outline: none;
    font-family: Arial;
  }

  #estado {
    outline: none;
    font-family: Arial;
  }

  #paises {
    width: 104%;
    outline: none;
    font-family: Arial;
  }
`;

export const BoxButton = styled.div`
  width: 100%;
  margin-left: 34.5%;
  margin-top: 0.5vh;


  #b1 {
    margin-left: 12.3vh;
  }

  button {
    width: 17%;
    height: 5vh;
    font-size: 28px;
    background-color: var(--yellow);
    border: 2px solid var(--black);
    border-radius: 6px;
    outline: none;
  }
`;

export const FakeDiv = styled.div`
  width: 100%;
  height: 10vh;
`;

export const CheckWords = styled.span`
  color: white;
`
