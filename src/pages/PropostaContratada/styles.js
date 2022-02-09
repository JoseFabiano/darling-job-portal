import styled from 'styled-components';

export const Container = styled.div`
  width: 96.6%;
    height: 100vh;
  margin-left: 7vh;

  background: var(--gray);
`;

export const Title = styled.div`
@media screen and (min-width: 1024px){
  display: flex;
  padding-bottom: 1vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  text-align: center;

  h1 {
    font-size: 5vh;
    color: var(--yellow);
    padding-left: 42%;
  }
}
`;


export const DivBotoes = styled.div`
width: 36%;
height: 9vh;
left: 107vh;
position: absolute;
top: 82vh;


#buttonRec{
    width: 37%;
    font-size: 3vh;
    border-radius: 3vh;
    margin-top: 3vh;
    border: 0.5vh solid black;
    background-color: var(--red);
}

#buttonAct{
    width: 37%;
    font-size: 3vh;
    border-radius: 3vh;
    margin-left: 7vh;
    border: 0.5vh solid black;
    background-color: var(--green);
}
`

export const DivGeral = styled.div`
 @media screen and (min-width: 1024px){
 width: 88%;
  height: 83vh;
  margin-left: 4%;
  border-radius: 5vh;
  background: var(--white);
 }
`;

export const BotoesCelia = styled.div`
width: 95%;
height: 10vh;
margin-top: -5vh;

#export{
  width: 28%;
    height: 5.3vh;
    font-size: 2.5vh;
    background-color: var(--blue);
    color: var(--yellow);
    border-radius: 1.5vh;
    margin-top: 4vh;
    margin-left: 18vh;
    border: 0.5vh solid black
}

#import{
  width: 28%;
    height: 5.3vh;
    font-size: 2.5vh;
    background-color: var(--blue);
    color: var(--yellow);
    border-radius: 1.5vh;
    margin-top: 4vh;
    margin-left: 4vh;
    border: 0.5vh solid black
}
`;

export const DivPendente = styled.div`
  width: 50%;
  height: 83vh;
  border-radius: 5vh 0vh 0vh 5vh;
`;

export const DivGeralPendentes = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
`;

export const DivBordPendente = styled.div`
@media screen and (min-width: 1024px){
  width: 41%;
  height: 6.5vh;
  border-radius: 5vh;
  margin-left: 25vh;
  margin-top: 5vh;
  background-color: var(--blue);

  h1 {
    text-align: center;
    font-size: 3.6vh;
    margin-top: 0.3vh;
    color: var(--yellow);
  }
}
`;

export const DivLinha = styled.div`
@media screen and (min-width: 1024px){
  width: 0.3%;
    height: 67vh;
    float: right;
    position: fixed;
    margin-top: -74vh;
    margin-left: 90vh;
    background-color: var(--blue);
}
`;
