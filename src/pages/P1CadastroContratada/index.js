import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { BoxLine, Container } from '../LoginContratado/styles';
import {
  BoxCadastro,
  BoxForm1,
  BoxInput,
  BoxLogin,
  Box,
  BoxGeral,
  Line,
  BoxForm,
  BoxSeta,
} from './styles';
import { Link } from 'react-router-dom';
import { CadastroContratada } from '../CadastroContratada';

export const CadastroContratadaP1 = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [step, setStep] = useState(0);
  const [erro, setErro] = useState(false);

  function verificaErro() {
    if (nome.length === 1 || email.length === 0 || senha.length === 0) {
      setErro(true);
    } else {
      setStep(1);
      setErro(false);
    }
  }
  console.log(erro);
  return (
    <>
      {step === 0 && (
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
                    <Link to="/loginContratado" style={{ textDecoration: 'none' }}>
                      <img src="seta.svg" alt="" id="seta" />{' '}
                      <h1 style={{ color: 'black' }}>Voltar</h1>
                    </Link>
                  </BoxSeta>
                  <h1 id="textoCadastrar">Cadastrar</h1>
                  {/* <img src="redesSociais.svg" alt="" id="redes" /> */}
                  {erro && (
                    <p id="msgErro"> Digite todos os campos para prosseguir </p>
                  )}
                  <BoxForm1>
                    <BoxInput id="email">
                      <h3>Nome</h3>
                      <input
                        type="text"
                        onChange={(e) => setNome(e.target.value)}
                        placeholder=""
                      ></input>
                    </BoxInput>
                    <BoxInput>
                      <h3 id="senha">Email</h3>
                      <input
                        type="email"
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
                    <button onClick={verificaErro}>Cadastrar</button>
                  </BoxForm1>
                </BoxCadastro>
                <BoxLogin>
                <BoxForm>
                    <h1>Entrar</h1>
                    <h2>Já possui conta?</h2>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                      <button>Entrar na conta</button>
                    </Link>
                  </BoxForm>
                </BoxLogin>
              </BoxGeral>
            </Box>
          </Container>
        </>
      )}
      {step === 1 && (
        <CadastroContratada nome={nome} email={email} senha={senha} />
      )}
    </>
  );
};
