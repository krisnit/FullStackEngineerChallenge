import React from "react";
import "./App.css";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
