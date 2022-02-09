import React, { useCallback } from 'react';
import {
  DivContainer1,
  DivContainer2,
  DivProfissionais,
  DivProfissionais2,
} from './style';
import { Link } from 'react-router-dom';
import { display } from '@material-ui/system';
import { NonceProvider } from 'react-select';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

export const Profissionais = (props) => {
  const history = useHistory();
  const enviarId = useCallback(async (dados) => {
    sessionStorage.id = props.idContratado;
    history.push('/resultadoCozinheira');
  });

  console.log('a', props);
  return (
    <>
      <DivProfissionais onClick={enviarId}>
        {/* <Link to="/resultadoCozinheira?id="> */}
        <img src="perfil.svg" alt="imagem de perfil-contratada" id="perfil" />
        <span id="id" style={{ display: 'none' }}>
          {props.idContratado}
        </span>
        <h1 id="nome">{props.nome} {props.dataNascimento}</h1>
        {/* <h1 id="idade"></h1> */}
        <h1 id="profissao">{props.tipoServico}</h1>
        {/* </Link> */}
      </DivProfissionais>
    </>
  );
};
