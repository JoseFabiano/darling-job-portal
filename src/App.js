import React from 'react';
import { CadastroContratadaP1 } from './pages/P1CadastroContratada';
import { Home } from './pages/Home';
import { PerfilContratada } from './pages/PerfilContratada';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/global.css';
import { LoginContratado } from './pages/LoginContratado';
import { Busca } from './pages/BuscaContratante';
import { DashBoard } from './pages/DashBoard';
import { BuscaBaba } from './pages/BuscaBaba';
import { BuscaCozinheira } from './pages/BuscaCozinheira';
import { BuscaDiarista } from './pages/BuscaDiarista';
import { ResultadoCozinheira } from './pages/ResultadoCozinheira';

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
          <Route exact path="/busca">
            <Busca />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/dash">
            <DashBoard />
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
      </Router>
    </>
  );
}

export default App;
