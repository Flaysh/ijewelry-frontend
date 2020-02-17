import React, { useState, useCallback } from "react";
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
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register";
import { LoginContext } from "./context/LoginContext";

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
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
    );
  } else {
    routes = (
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/buy/:jewelryId">
          <Buy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      <div className="App">
        <Router>
          <MainNavigation />
          <main>
              {routes}
          </main>
        </Router>
      </div>
    </LoginContext.Provider>
  );
}



