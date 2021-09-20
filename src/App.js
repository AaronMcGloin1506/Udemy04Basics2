import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home';
import Header from './components/header';
import PureComp from './components/pureComp'
import PureCompF from './components/pureCompf'

const App = () => {
  return (
    <BrowserRouter>
       <Header/>
       <div className="container">
        <Switch>
        <Route path="/purecomp" component={PureComp} />
        <Route path="/purecompf" component={PureCompF} />
        <Route path="/" component={Home} />
        </Switch>
       </div>
      
    </BrowserRouter>
  );
}

export default App;
