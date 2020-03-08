import React from "react";
import "./App.css";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" component={Landing} />
      </Router>
    </div>
  );
}

export default App;
