import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './Components/About/About';
import Home from './Components/Home/Home'
import Catalog from "./Components/Catalog/Catalog";
import Buy from "./Components/Buy/Buy";
import MainNavigation from "./Components/Navigation/MainNavigation";
import Add from "./Components/AddJewelry/AddJewelry";

export default function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/catalog">
              <Catalog />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/buy/:jewelryId">
              <Buy />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
