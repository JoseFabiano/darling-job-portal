import styled from 'styled-components';

export const BackgroundHome1 = styled.div`
  #logo-estrelas {
    width: 23%;
    margin-left: 39%;
    margin-bottom: 3%;
    margin-top: 3%;
  }

  background: var(--blue);
`;

// @media screen and (min-width: 1024px) {
// }

export const BackgroundHome2 = styled.div`
@media screen and (min-width: 1024px){
  #logo-conect {
    width: 75%;
    margin-left: 12%;
  }

  background: var(--white);
}
`;

export const Conecting = styled.div`
@media screen and (min-width: 1024px){
  padding-bottom: 4vh;


  h1 {
    color: var(--yellow);
    text-align: center;
    font-size: 6vh;
    text-decoration: underline;
    padding-bottom: 2vh;
  }

  p {
    color: var(--black);
    text-align: center;
    font-size: 4vh;
    width: 70%;
    margin-left: 15%;
  }
}
  
`;

export const WorkSec = styled.div`
  background: var(--yellow);
  width: 100%;
  height: 66vh;
`;

export const WorkSec2 = styled.div`
width: 50%;
height: 66vh;
float: right;
@media screen and (min-width: 1024px){

  p {
  color: var(--black);
    text-align: justify;
    font-size: 4vh;
    float: right;
    margin-right: 19vh;
    width: 81%;
  }

  #seguranca{
    padding-bottom: 2vh;
    margin-top: 20vh;
  }
}
`;

export const WorkSec3 = styled.div`
width: 50%;
height: 66vh;
float: left;

@media screen and (min-width: 1024px){

  h1 {
    color: var(--blue);
    text-align: center;
    font-size: 6vh;
    text-decoration: underline;
    width: 100%;
    padding-top: 4vh;
    margin-left: 54vh;
    padding-bottom: 8vh;
  }

  #logo-protect {
    width: 43%;
    margin-left: 25vh;
    margin-top: -9vh;
    padding-top: 1vh;
  }
}
`;

export const Org = styled.div`
background: var(--white);
    width: 100%;
    height: 66vh;
`;

export const Org2 = styled.div`
    width: 50%;
    height: 66vh;
    float: left;

    @media screen and (min-width: 1024px){
h1 {
    color: var(--yellow);
    text-align: center;
    font-size: 6vh;
    text-decoration: underline;
    width: 100%;
    margin-left: 53vh;
    padding-top: 4vh;
    padding-bottom: 8vh;
  }
  #organiza{
    padding-bottom: 2vh;
    margin-top: -4vh;
  }
  p {
    text-align: justify;
    font-size: 4vh;
    margin-left: 19vh;
    width: 81%;
  }
}
`;

export const Org3 = styled.div`
width: 50%;
    height: 66vh;
    float: right;

@media screen and (min-width: 1024px){
  #logo-invest {
    width: 43%;
    margin-right: 29.5vh;
    margin-top: 15vh;
    float: right;
  }
}
`;

export const Busca = styled.div`
  background: var(--yellow);
  width: 100%;
  height: 76vh;
  
@media screen and (min-width: 1024px){
  h1 {
    color: var(--blue);
    text-align: center;
    font-size: 6vh;
    text-decoration: underline;
    padding-top: 4vh;
    padding-bottom: 3vh;
  }

  #mapa-busca {
    width: 70%;
    margin-left: 15%;
    margin-bottom: 3%;
  }
}
`;

export const Feed = styled.div`
  background: var(--white);
  width: 100%;
  height: 87vh;
`;

export const FeedGeral = styled.div`
display: flex;
`;

export const FeedTexto = styled.div`
width: 100%;
height: 3vh;
display: flex;
`;

export const FeedEstrela = styled.div`
width: 100%;
height: 15vh;
display: flex;
`;

export const Feed2 = styled.div`
  width: 100%;
  height: 54vh;

@media screen and (min-width: 1024px){

h1 {
    color: var(--yellow);
    text-align: center;
    font-size: 6vh;
    padding-top: 4vh;
    text-decoration: underline;
  }

  h2 {
    color: var(--black);
    font-size: 5vh;
    margin-left: 9.5%;
  }

  h3 {
    color: var(--black);
    font-size: 4vh;
    margin-left: 12%;
    margin-top: -15vh;
  }

  p {
    color: var(--black);
    text-align: center;
    font-size: 4vh;
    margin-left: 23%;
    width: 55%;
    margin-top: 15vh;
  }

  #estrelas-aval {
    margin-left: 9%;
    height: 27vh;
    margin-top: -4vh;
  }

  #logo-empresaria {
    margin-left: 11%;
    width: 9%;
  }

  #contratado{
    padding-top: 2vh;
  }
}
`;

export const Feed3 = styled.div`
  width: 100%;
  height: 54vh;
  margin-top: -22vh;

  @media screen and (min-width: 1024px){
  #h2-right {
    color: var(--black);
    font-size: 5vh;
    margin-left: 78%;
    padding-top: 4vh;
  }

  #h3-right {
    color: var(--black);
    font-size: 4vh;
    margin-left: 81%;
    margin-top: -15vh;
  }

  #p-right {
    color: var(--black);
    font-size: 4vh;
    width: 55%;
    margin-left: 24%;
    margin-top: 20vh;;
  }

  #logo-empresario {
    margin-left: 80%;
    width: 9%;
  }

  #estrelas-aval-right {
    margin-left: 78%;
    height: 27vh;
    margin-top: -4vh;
  }
}
`;

export const Rodape = styled.div`
  background: var(--blue);
  height: 73vh;

  @media screen and (min-width: 1024px){
  #logo-rod {
    margin-left: 43.5%;
    width: 14%;
    margin-top: 4%;
  }

  h1 {
    color: var(--yellow);
    text-align: center;
    font-size: 4vh;
    padding-top: 7vh;
  }
}
`;

export const Redes = styled.div`
width: 100%;
height: 18vh;

@media screen and (min-width: 1024px){
#face {
    width: 10vh;
    margin-left: 88vh;
    padding-top: 5vh;
  }

  #insta {
    width: 10vh;
    margin-left: 2vh;
  }

  #link {
    width: 10vh;
    margin-left: 2vh;
  }
}
`;

export const Line = styled.div`
@media screen and (min-width: 1024px){
  width: 33%;
  height: 0.5vh;
    background: var(--yellow);
    margin-bottom: 4vh;
  display: flex;
  margin-top: -7%;
}
  `;

export const Line2 = styled.div`
@media screen and (min-width: 1024px){
  width: 33%;
  height: 0.5vh;
    background: var(--yellow);
    margin-bottom: 4vh;
  display: flex;
  float: right;
  margin-top: -2%;
}
`;
