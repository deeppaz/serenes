import React, { useEffect } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Anonymous from "./components/Anonymous/Anonymous";
import Mods from "./components/Mods/Mods";

import Start from "./components/Start/Start";
import Chill from "./components/Serenes/Chill";
import Hype from "./components/Serenes/Hype";
import Random from "./components/Serenes/Random";

import About from "./components/About/About";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/mods" component={Mods} />

          <Route exact path="/anonymous" component={Anonymous} />
          <Route exact path="/chill" component={Chill} />
          <Route exact path="/hype" component={Hype} />
          <Route exact path="/random" component={Random} />

          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
