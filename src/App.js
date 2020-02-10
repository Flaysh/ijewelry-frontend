import React, { useState } from "react";
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

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);


  if (isLoggedIn) {
    return (
      <div className="App">
        <Router>
          <MainNavigation isLoggedIn={isLoggedIn} isAdmin={isAdmin}/>
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
  if (isLoggedIn && isAdmin) {
    return (
      <div className="App">
        <Router>
          <MainNavigation />
          <main>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
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
  else {
    return (
      <div className="App">
        <Router>
          <MainNavigation />
          <main>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login setIsLoggedIn={() => setIsLoggedIn(true)} setIsAdmin={() => setIsAdmin(true)}/>
              </Route>
              <Route path="/register">
                <Register setIsLoggedIn={() => setIsLoggedIn(true)} setIsAdmin={() => setIsAdmin(true)}/>
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
          </main>
        </Router>
      </div>
    );
  }

}


