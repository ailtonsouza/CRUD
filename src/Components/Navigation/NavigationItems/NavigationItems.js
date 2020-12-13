import React, { useState } from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import DropDownCadastrar from "./DropDownCadastrar/DropDownCadastrar";

const NavigationItems = () => {
  return (
    <>
      <ul className="NavigationItems">
        <NavigationItem name="Cadastrar">
          <DropDownCadastrar />
        </NavigationItem>
        <NavigationItem name="Gerenciar">
          <DropDownCadastrar />
        </NavigationItem>
        <NavigationItem name="Excluir">
          <DropDownCadastrar />
        </NavigationItem>
      </ul>
    </>
  );
};

export default NavigationItems;
