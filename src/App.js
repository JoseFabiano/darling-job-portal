import React from 'react';
import { CadastroContratadaP1 } from './pages/P1CadastroContratada';
import { CadastroContratada } from './pages/CadastroContratada';
import { Home } from './pages/Home';
import { Proposta, PropostaContratada } from './pages/PropostaContratada';
import { PerfilContratada } from './pages/PerfilContratada';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/global.css';
import { LoginContratado } from './pages/LoginContratado';
import { DetalhesProposta } from './pages/DetalhesPropostaContratada';
import { Busca } from './pages/BuscaContratante';
import { CalendarioContratada } from './pages/CalendarioContratada';
import { DashBoard } from './pages/DashBoard';
import { ChatContratada } from './pages/ChatContratada';
import { PerfilContratante } from './pages/PerfilContratante';
import { PropostaContratante } from './pages/PropostaContratante';
import { ChatContratante } from './pages/ChatContratante';
import { BuscaBaba } from './pages/BuscaBaba';
import { BuscaCozinheira } from './pages/BuscaCozinheira';
import { BuscaDiarista } from './pages/BuscaDiarista';
import { ResultadoCozinheira } from './pages/ResultadoCozinheira';
import { ModalProposta } from './pages/ModalProposta';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/login">
            <LoginContratado />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/cadastro/usuario">
            <CadastroContratadaP1 />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/perfilContratada">
            <PerfilContratada />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/propostaContratada">
            <PropostaContratada />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/detalhesProposta">
            <DetalhesProposta />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/busca">
            <Busca />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/calendarioContratada">
            <CalendarioContratada />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/dash">
            <DashBoard />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/chatContratada">
            <ChatContratada />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/perfilContratante">
            <PerfilContratante />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/propostaContratante">
            <PropostaContratante />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/chatContratante">
            <ChatContratante />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/buscaCozinheira">
            <BuscaCozinheira />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/buscaDiarista">
            <BuscaDiarista />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/buscaBaba">
            <BuscaBaba />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/resultadoCozinheira">
            <ResultadoCozinheira />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/modalProposta">
            <ModalProposta />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
