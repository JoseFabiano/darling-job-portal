import React, { Component, useEffect, useState } from 'react';
import api from '../../api';
import { Navbar } from '../../components/Navbar';
import apiContratada from '../../apiContratada';
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
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();
  const handler = () => {
    history.push('/dash');
  };

  async function loginContratado(email, senha) {
    try {
      await api.get(
        `http://localhost:8080/darlingjob/contratado/login/${email}/${senha}`
      );
      const { data } = await api.get(
        `http://localhost:8080/darlingjob/contratado/logado/${email}/${senha}`
      );
      localStorage.setItem('contratado', JSON.stringify(data));
      if (data.logado == true) {
        console.log('Usuário identificado. Redirecionando para a página...');
        handler();
      } else {
        return alert('Não foi possivel redirecionar...');
      }
    } catch {
      alert('Email ou senha inválido.');
    }
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
                <Link to="/cadastro/contratada" style={{ textDecoration: 'none' }}>
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
                  <h3>Email</h3>
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
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
                <button onClick={(e) => loginContratado(email, senha)}>
                  Entrar
                </button>
              </BoxForm1>
            </BoxLogin>
          </BoxGeral>
        </Box>
      </Container>
    </>
  );
};
