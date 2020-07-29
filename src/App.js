import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import {CharacterProvider} from "./context/CharacterContext";

import Characters from './components/Characters';
import FakeNavBar from "./components/FakeNavBar";
import NewCharacter from './components/NewCharacter';

function App() {
  return (
    <React.Fragment>
      <FakeNavBar />
      <CharacterProvider>
    <main className="container">
      <Switch>
      <Route path="/characters" component={Characters} />
      <Route path="/add" component={NewCharacter} />
      <Redirect from="/" exact to="/characters" />
      </Switch>
    </main>
    </CharacterProvider>
    </React.Fragment>
  );
}

export default App;
