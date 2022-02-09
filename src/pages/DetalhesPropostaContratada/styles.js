import styled from "styled-components";

export const Container = styled.div`
width: 96.6%;
    height: 100vh;
    margin-left: 7vh;
display: flex;

background: var(--gray);
`;

export const DivGeral = styled.div`
width: 88%;
height: 83vh;
margin-left: 6%;
border-radius: 5vh;
margin-block: auto;
background: var(--white);

`
export const DivUsuario = styled.div`
width: 50%;
height: 20vh;
margin-left: 6vh;
display: flex;

#perfil{
    width: 24%;
    margin-top: 2vh;
}

#nome{
    padding-top: 6vh;
    font-size: 4vh;
}

#online{
    width: 5%;
    padding-top: 15vh;
    margin-left: -7vh;
    margin-right: 3vh;
}
`
export const DivDetalhesUsuario = styled.div`
width: 50%;
height: 50vh;
margin-left: 6vh;
font-size: 1.7vh;

h1{
    padding-top: 3vh;
}
`



export const DivObservacao = styled.div`
    width: 31%;
    height: 83vh;
    background-color: var(--blue);
    float: right;
    margin-top: -80vh;
    border-radius: 0vh 5vh 5vh 0vh;

#obs{
    font-size: 5vh;
    padding-left: 3.5vh;
    padding-top: 3vh;
    color: var(--yellow);
}

#descricao{
    padding: 1vh;
    font-size: 5vh;
    color: var(--white);
}
`
