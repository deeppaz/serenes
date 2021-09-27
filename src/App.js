import React from "react";
import { initializeApp } from "firebase/app";
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Anonymous from "./components/Anonymous/Anonymous";
import Mods from "./components/Mods/Mods";

import Start from "./components/Start/Start";
import Serenes from "./components/Serenes/Serenes";
import About from "./components/About/About";



const firebaseConfig = {
  apiKey: "AIzaSyDJxHGhc8bqjfluv2M2z05WpBD3jpDRs7A",
  authDomain: "serenes.firebaseapp.com",
  projectId: "serenes",
  storageBucket: "serenes.appspot.com",
  messagingSenderId: "1057359758485",
  appId: "1:1057359758485:web:bbb4732753b4359419879c",
  measurementId: "G-XFNB99KKNV"
};

initializeApp(firebaseConfig);


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/anonymous" component={Anonymous} />
          <Route path="/mods" component={Mods} />
          <Route path="/play" component={Serenes} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
