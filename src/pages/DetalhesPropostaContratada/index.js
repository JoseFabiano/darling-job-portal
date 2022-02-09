import { NavbarMenuContratada } from "../../components/NavbarMenuContratada"
import { Container, DivBotoes, DivDetalhesUsuario, DivGeral, DivObservacao, DivUsuario } from "./styles"

export const DetalhesProposta = () => {
    return (
        <>

        <NavbarMenuContratada />
        <Container>
            <DivGeral>
                <DivUsuario>
                <img src="perfil.svg" alt="imagem de perfil-contratada" id="perfil" />
                <img src="online.svg" alt="sinal-online" id="online" />
                <h1 id="nome">Maria Lopes</h1>
                </DivUsuario>
                <DivDetalhesUsuario>
                    <h1>Categoria:  Diarista</h1>
                    <h1>Descrição: 4 cômodos</h1>
                    <h1>Endereço: Rua Luis Cléber, 294</h1>
                    <h1>Data: 29/08</h1>
                    <h1>Horário: 07:00 - 12:00</h1>
                    <h1>Valor: 300,00</h1>
                </DivDetalhesUsuario>
                
                <DivObservacao>
                    <h1 id="obs">Observações</h1>
                    <h1 id="descricao">A campainha não está funcionando, por favor chamar no portão ou avisar pelo chat.</h1>
                </DivObservacao>
            </DivGeral>    
        </Container>           

        </>
    )
}