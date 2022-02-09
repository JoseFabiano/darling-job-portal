import { BotoesCelia } from "../../pages/PropostaContratada/styles";
import { DivDetalhesProp } from "./styles";

export const PendentePropostaContratada = (props) => {
  return (
    <>
        <DivDetalhesProp onClick={props.click}>
            <h1>Novo Serviço do tipo {props.categoria} recebido!</h1>
        </DivDetalhesProp>        
    </>
  );
};