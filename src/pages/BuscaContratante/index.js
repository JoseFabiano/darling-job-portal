import { red } from '@material-ui/core/colors';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import { NavbarMenuContratada } from '../../components/NavbarMenuContratada';
import { NavbarMenuContratante } from '../../components/NavbarMenuContratante';
import { BoxGeral } from '../PerfilContratada/styles';
import Select from 'react-select'
import {
  Areas,
  Box,
  BoxPesq,
  BoxResult,
  Buscar,
  DivGeral,
  DivLupa,
  TituloBusc,
} from './styles';
import { useAutocomplete } from '@material-ui/unstyled';

export const Busca = () => {

  const [usuarioBuscado, SetUsuarioBuscado] = useState([]);
    async function buscarNome(nome){

      const { data } = await api.get(`http://localhost:8080/darlingjob/contratado/buscarNome/${nome}`);
      SetUsuarioBuscado(data);
      if(Object.keys(data).length === 0){
        alert("nenhum usuario encontrado")
      }else{
        console.log(usuarioBuscado)
       
      }
    }
  return (
    <>
      <NavbarMenuContratante />
      <DivGeral>
        <TituloBusc>
          <h1>Busca</h1>
        </TituloBusc>
        <Box>
          <Buscar>
            <BoxPesq>
              <input
                id="inputPesquisa"
                type="text"
                placeholder="Buscar profissionais"
                autoComplete="off"
                onBlur={e => buscarNome(e.target.value)}
                style={{
                  backgroundImage: 'url(lupa-amarela.svg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '120vh',
                }}
              />
            </BoxPesq>
          </Buscar>
          <Areas>
            <Link to="/buscaCozinheira">
              <img
                src="cozinheira.svg"
                alt="botão-busca-cozinheira"
                id="cozin"
              />
            </Link>

            <Link to="/buscaDiarista">
              <img src="diarista.svg" 
              alt="botão-busca-diarista" id="diarist" />
            </Link>

            <Link to="/buscaBaba">
              <img src="baba.svg" 
              alt="botão-busca-baba" id="bab" />
            </Link>
          </Areas>
        </Box>
      </DivGeral>
    </>
  );
};
