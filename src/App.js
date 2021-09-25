import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Anonymous from './components/Anonymous/Anonymous';

import Start from "./components/Start/Start";
import Serenes from "./components/Serenes/Serenes";
import About from "./components/About/About";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/play" component={Serenes} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/anonymous" component={Anonymous} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
