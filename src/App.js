import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Mint from './components/Mint';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Mint />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
