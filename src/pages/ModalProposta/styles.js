import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
height: 101vh;
margin-left: 6vh;
display: flex;
background: var(--white);
`;

export const DivGeral = styled.div`
height: 77vh;
    width: 37%;
    margin-top: 12vh;
    margin-left: 31%;
    border-radius: 5vh;
background-color: var(--gray);
`

export const DivEnviar = styled.div`
width: 100%;
height: 6vh;
border-radius: 5vh 5vh 0vh 0vh;
color: var(--yellow);
background-color: var(--blue);

h1{
    padding-top: 0.5vh;
    text-align: center;
    font-size: 3vh;

}
`
export const DivInfo = styled.div`
    width: 100%;

    button{
        position: absolute;
        top: 81.5%;
    left: 46%;
    width: 21vh;
    height: 4vh;
    font-size: 2.5vh;
        border-radius: 3vh;
        background-color: var(--blue);
        color: var(--white);
    }
`;
export const DivRadios = styled.div`
width: 100%;
height: 64vh;

border-radius: 0vh 0vh 5vh 5vh;

h1{
    margin-top: -5.5vh;
    margin-left: 4vh;
    font-size: 3vh;
}

button{
    width: 28%;
    height: 5vh;
    font-size: 3vh;
    margin-left: 34%;
    margin-top: 5vh;
    border-radius: 1vh;
    color: var(--white);
    background-color: var(--green);
}

#categoria{
    margin: 0;
    position: absolute;
    top: 18%;
    left: 47.3%;
    font-size: 5vh;
}

#categoriaBaba{
    position:absolute;
    left: 38%;
    top: 28%;
    font-weight: bold;
    font-size: 3vh;
}

#categoriaDiarista{
    position:absolute;
    left: 48.7%;
    top: 28%;
    font-weight: bold;
    font-size: 3vh;
}

#categoriaCozinheira{
    position:absolute;
    left: 59.7%;
    top: 28%;
    font-weight: bold;
    font-size: 3vh;
}
`;

export const DivRua = styled.div`
position: absolute;
top: 34%;
    left: 48.5%;
    font-size: 2vh;

    input{
        position: absolute;
        left: -15vh;
        width: 46vh;
        height: 3vh;
        border-radius: 5vh;
        font-size: 2vh;
        border: 0.5vh solid black;
    }
`;

export const DivData = styled.div`
position: absolute;
top: 45%;
    left: 49.5%;
    font-size: 2vh;
input{
    position: absolute;
    left: -18vh;
    width: 46vh;
    height: 3vh;
    border-radius: 5vh;
    font-size: 2vh;
    border: 0.5vh solid black;
}
`;

export const DivHora = styled.div`
position: absolute;
top: 56%;
    left: 49.5%;
    font-size: 2vh;
input{
    position: absolute;
    left: -18vh;
    width: 46vh;
    height: 3vh;
    border-radius: 5vh;
    font-size: 2vh;
    border: 0.5vh solid black;
}
`;

export const DivValor = styled.div`
position: absolute;
top: 67%;
    left: 49.5%;
    font-size: 2vh;
input{
    position: absolute;
    left: -18vh;
    width: 46vh;
    height: 3vh;
    border-radius: 5vh;
    font-size: 2vh;
    border: 0.5vh solid black;
}
`;