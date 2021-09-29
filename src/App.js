import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Anonymous from "./components/Anonymous/Anonymous";
import Mods from "./components/Mods/Mods";

import Start from "./components/Start/Start";
import Chill from "./components/Serenes/Chill";
import Hype from "./components/Serenes/Hype";
import Random from "./components/Serenes/Random";

import About from "./components/About/About";

import {
  getAuth,
  onAuthStateChanged
} from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDJxHGhc8bqjfluv2M2z05WpBD3jpDRs7A",
  authDomain: "serenes.firebaseapp.com",
  projectId: "serenes",
  storageBucket: "serenes.appspot.com",
  messagingSenderId: "1057359758485",
  appId: "1:1057359758485:web:bbb4732753b4359419879c",
  measurementId: "G-XFNB99KKNV",
};

initializeApp(firebaseConfig);

function App() {
  const authCheck = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() =>
              !authCheck.currentUser ? <Start /> : <Redirect to="/mods" />
            }
          />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Register} />

          <Route path="/anonymous" component={Anonymous} />
          <Route path="/mods" component={Mods} />
          <Route path="/chill" component={Chill} />
          <Route path="/hype" component={Hype} />
          <Route path="/random" component={Random} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
