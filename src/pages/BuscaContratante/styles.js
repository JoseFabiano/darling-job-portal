import styled from 'styled-components';

export const DivGeral = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--gray);
`;

export const Box = styled.div`
  background: var(--white);
  height: 83vh;
  width: 80%;
  border-radius: 5vh;
  margin-left: 12%;
`;

export const TituloBusc = styled.div`
  padding-top: 2vh;
  padding-bottom: 2vh;
  @media screen and (min-width: 1024px){
  h1 {
    text-align: center;
    color: var(--yellow);
    font-size: 5vh;
}
  }
`;

export const Buscar = styled.div`
  width: 80%;
  margin-left: 10%;
  border-radius: 30px;
  padding-top: 7vh;
  @media screen and (min-width: 1024px){
  h3 {
    text-align: justify;
    margin-left: 4%;
    padding-top: 1.7%;
    margin-bottom: 22px;
    font-size: 20px;
  }
}
`;

export const BoxPesq = styled.div`
  /* background: var(--dark-gray);
  border-radius: 30px;
  height: 60px;
  color: var(--white); */

  width: 100%;
@media screen and (min-width: 1024px){
  input {
    background-image: url(lupa-amarela.svg);
    background-repeat: no-repeat;
    background-position: 80vh;
  }

  input::placeholder {
    color: var(--white);
  }

  #inputPesquisa {
    background: var(--dark-gray);
    border-radius: 5vh;
    height: 8vh;
    width: 63%;
    font-size: 3vh;
    position: absolute;
    top: 21%;
    padding: 2vh;
    color: var(--white);
  }

  #lupaAmarela {
    margin-top: -65px;
    width: 55px;
    align-items: right;
    float: right;
    margin-right: 3%;
  }

  #inputResultado{
    position: absolute;
    top: 34vh;
    left: 36vh;
    height: 6vh;
    width: 50%;
    color: black;
  }
}
`;
export const Areas = styled.div`
  margin-left: 20%;
  margin-top: 20%;
  @media screen and (min-width: 1024px){
  #diarist {
    margin-right: 8%;
    width: 19%;
  }

  #bab {
    width: 19%;
  }

  #cozin {
    margin-right: 8%;
    width: 19%;
  }
}
`;
