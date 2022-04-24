import React, { Component, useEffect, useState } from 'react';
import api from '../../api';
import { Navbar } from '../../components/Navbar';
import { DashBoard } from '../DashBoard';
import {
  Box,
  BoxCadastro,
  BoxForm,
  BoxForm1,
  BoxGeral,
  BoxInput,
  BoxLine,
  BoxLogin,
  BoxSeta,
  Container,
  Line,
} from './styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

export const LoginContratado = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();
  const handler = () => {
    history.push('/dash');
  };

  async function loginContratado() {
    try {
      api
        .post('/usuarios/autenticar', {
          nome: nome,
          senha: senha,
        })
        .then((resposta) => {
          console.log(resposta);
          handler();
          alert('Login feito!');
        })
        .catch((erro) => {
          console.log(erro);
          alert('Erro ao logar!');
        });
    } catch {}
  }

  return (
    <>
      <Navbar />
      <Container>
        <BoxLine>
          <Line />
        </BoxLine>
        <Box>
          <BoxGeral>
            <BoxCadastro>
              <BoxSeta>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <img src="seta.svg" alt="" id="seta" />{' '}
                  <h1 style={{ color: 'black' }}>Voltar</h1>
                </Link>
              </BoxSeta>
              <BoxForm>
                <h1>Cadastrar</h1>
                <h2>Não possui conta?</h2>
                <Link to="/cadastro/usuario" style={{ textDecoration: 'none' }}>
                  <button>Criar sua conta</button>
                </Link>
              </BoxForm>
            </BoxCadastro>
            <BoxLogin>
              <h1>Entrar</h1>
              <img src="redesSociais.svg" alt="" id="redes" />
              <h2>OU</h2>
              <BoxForm1>
                <BoxInput>
                  <h3>Nome</h3>
                  <input
                    type="text"
                    onChange={(e) => setNome(e.target.value)}
                    placeholder=""
                  ></input>
                </BoxInput>
                <BoxInput>
                  <h3 id="senha">Senha</h3>
                  <input
                    type="password"
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder=""
                  ></input>
                </BoxInput>
                <button onClick={(e) => loginContratado()}>Entrar</button>
              </BoxForm1>
            </BoxLogin>
          </BoxGeral>
        </Box>
      </Container>
    </>
  );
};
