import React from "react";
import "./App.css";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import AdminRoute from "./Components/Routing/AdminRoute";
import UserRoute from "./Components/Routing/UserRoute";
import Admin from "./Components/Admin";
import User from "./Components/User";
import ModifyEmployee from "./Components/Employees/ModifyEmployee";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <AdminRoute
              exact
              path="/admin/edit/:id"
              component={ModifyEmployee}
            />
            <AdminRoute exact path="/admin" component={Admin} />
            <UserRoute exact path="/user" component={User} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
