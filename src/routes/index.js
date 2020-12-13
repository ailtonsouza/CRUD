import React from "react";
import { Switch, Route } from "react-router-dom";

import DDD from "../Pages/cadastrarDDD/cadastrarDDD";
import Planos from "../Pages/cadastrarPlanos/cadastrarPlanos";
import Tarifas from "../Pages/cadastrarTarifa/cadastrarTarifa";

const Routes = () => (
  <Switch>
    <Route path="/Tarifas" exact component={Tarifas} Tarifas />
    <Route path="/DDD" exact component={DDD} DDD />
    <Route path="/Planos" exact component={Planos} Planos />
  </Switch>
);

export default Routes;
