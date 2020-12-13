import React, { useState, useEffect } from "react";
import Backdrop from "../../../Components/UI/Backdrop/Backdrop";

import "./selector.css";

const Selector = (props) => {
  return (
    <>
      <div className="options">
        {props.selectors.map((x) => (
          <div
            className="option"
            onClick={() =>
              props.setSelectedOption({
                Simbolo: x.Simbolo,
                valor: x.valor,
              })
            }
          >
            {x.Simbolo} - {x.valor}
          </div>
        ))}
      </div>
      <Backdrop isOpen={true} />
    </>
  );
};

export default Selector;
