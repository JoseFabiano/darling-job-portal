import { display } from '@material-ui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NonceProvider } from 'react-select';
import { DivDetalhes, DivGeralDetalhes, DivTexto1, DivTexto2, DivBotaoDetalhes } from './styles';

export const DetalhesProps = (props) => {
    return (
        <>
            <DivDetalhes>
            <DivGeralDetalhes>
              <DivTexto1>
                <h1>{props.nome} Solicitou seus serviços!</h1>
              </DivTexto1>
              <DivTexto2 id="catego">
                <h1>Categoria: {props.categoriaa}</h1>
              </DivTexto2>
              <DivTexto2>
                <h1>Endereço: {props.endereco}</h1>
              </DivTexto2>
              <DivTexto2>
                <h1>Dias: {props.dia}</h1>
              </DivTexto2>
              <DivTexto2>
                <h1>Salario: R$ {props.valor}</h1>
              </DivTexto2>
              <DivBotaoDetalhes>
              
              </DivBotaoDetalhes>
            </DivGeralDetalhes>
            </DivDetalhes>
        </>
    )
}
