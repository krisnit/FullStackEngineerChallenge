import React from "react";
import FetchEmployees from "../Employees/FetchEmployees";
import { Route, Switch } from "react-router-dom";
import ModifyEmployee from "../Employees/ModifyEmployee";
const index = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin/edit/:id" component={ModifyEmployee} />
        <Route exact path="/admin" component={FetchEmployees} />
      </Switch>
    </div>
  );
};

export default index;
