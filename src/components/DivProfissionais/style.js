import styled from 'styled-components';

export const DivContainer1 = styled.div`
  width: 20%;
  height: 42vh;
  /* background-color: blue; */
  display: flex;
  justify-content: space-around;
`;

export const DivProfissionais = styled.div`
  width: 20%;
  height: 34vh;
  border-radius: 5vh;
  display: inline-block;
    margin-left: 17.9vh;
    margin-bottom: 5vh;
  background-color: var(--blue);

  #perfil {
    margin-left: 9.5vh;
    margin-top: 3vh;
    width: 46%;
  }

  h1 {
    font-size: 3vh;
    padding-left: 5.6vh;
    color: var(--white);
  }

  #idade {
    margin-left: 20vh;
    margin-top: -4.6vh;
  }

  #estrelas {
    width: 74%;
    margin-top: -8vh;
    margin-left: 3vh;
  }
`;

export const DivContainer2 = styled.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: space-around;
`;

export const DivProfissionais2 = styled.div`
  width: 23%;
  height: 34vh;
  border-radius: 30px;
  background-color: var(--blue);

  #perfil {
    padding-left: 7.9vh;
    padding-top: 3vh;
    padding-bottom: 1vh;
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
    width: 74%;
    margin-top: -8vh;
    margin-left: 3vh;
  }
`;
