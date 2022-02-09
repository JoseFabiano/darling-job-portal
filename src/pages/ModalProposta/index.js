import { appendFile, utimesSync } from "fs"
import { useEffect, useState } from "react"
import  api  from "../../api";
import InputMask from 'react-awesome-mask-input';
import { useHistory } from 'react-router-dom';
import { NavbarMenuContratante } from "../../components/NavbarMenuContratante"
import { Container, DivEnviar, DivGeral, DivInfo, DivRadios, DivRua, DivData, DivHora, DivValor } from "./styles"

export const ModalProposta = () => {
    const [categoria, setCategoria] = useState();
    const [endereco, setEndereco] = useState();
    const [data, setData] = useState();
    const [horario, setHorario] = useState();
    const [valor, setValor] = useState();
    const history = useHistory();
    const handler = () => { history.push('/perfilContratante') };

    var dados = localStorage.getItem('contratante');
    var usuario = JSON.parse(dados);
    var semResposta = "NR"
    
    sessionStorage.dadosContratante = usuario.nome;
    
    async function enviarProposta(categoria, endereco, data, horario, valor){
        try{
            await api.post(`http://localhost:8080/darlingjob/contrato`,
            {
                idContratada: sessionStorage.idProposta,
                idContratante: usuario.idContratante,
                categoria: categoria,
                endereco: endereco,
                data: data,
                hora: horario,
                valor: valor,
                isAcepted: semResposta
            });
           
            handler();

        }catch(error){
            alert('Contrato não enviado!'+ error)
        }
        
    }

    return (
        <>
            <NavbarMenuContratante />
            <Container>
                <DivGeral>
                    <DivEnviar>
                        <h1>Enviar Proposta?</h1>
                    </DivEnviar>
                    <DivInfo>
                        <DivRadios>
                            <h1 id="categoria">Categoria</h1>
                            <label id="categoriaBaba">
                                <input type="radio" id="baba" onChange={() => document.getElementById('baba').checked ? setCategoria("Baba") : null} value="baba" name="radio" style={{width: "4vh", height: "4vh"}}/><h1>Babá</h1>
                            </label>
                            <label id="categoriaDiarista">
                                <input type="radio" id="diarista" onChange={() => document.getElementById('diarista').checked ? setCategoria("Diarista") : null} value="diarista" name="radio" style={{width: "4vh", height: "4vh"}}/><h1>Diarista</h1>
                            </label>
                            <label id="categoriaCozinheira">
                                <input type="radio" id="cozinheira" onChange={() => document.getElementById('cozinheira').checked ? setCategoria("Cozinheira") : null}value="cozinheira" name="radio" style={{width: "4vh", height: "4vh"}}/><h1>Cozinheira</h1>
                            </label>                           
                        </DivRadios>
                        <DivRua>
                            <h1>Endereço</h1>
                            <input onChange={e => setEndereco(e.target.value)} placeholder="Rua Adorinhas Junior"></input>
                        </DivRua>
                        <DivData>
                            <h1>Data</h1>
                            <InputMask mask={['99/99/9999']} onChange={e => setData(e.target.value)} ></InputMask>
                        </DivData>
                        <DivHora>
                            <h1>Hora</h1>
                            <InputMask mask={['99:99']} onChange={e => setHorario(e.target.value)}placeholder="00:00"></InputMask>
                        </DivHora>
                        <DivValor>
                            <h1>Valor</h1>
                            <input mask={['99:99']} onChange={e => setValor(e.target.value)} placeholder="R$ 300" type="number"></input>
                        </DivValor>
                        <button onClick={e => (enviarProposta(categoria, endereco, data, horario, valor))} >Enviar</button>
                    </DivInfo>
                </DivGeral>
            </Container>
        </>
    )
}