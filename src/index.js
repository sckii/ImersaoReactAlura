import React from 'react';
import ReactDOM from 'react-dom';
import './styles/config/reset.css'
import './styles/root/index.css';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/categoria'
import CadastroVideo from './pages/cadastro/video'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Pagina404 = () => (<div> 404 </div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);