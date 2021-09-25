import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
