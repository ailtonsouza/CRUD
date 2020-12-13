import React, { useState } from "react";
import "./ModalAddPlano.css";

const ModalAdd = (props) => {
  const [nome, setNome] = useState();
  const [franquia, setFranquia] = useState();
  const [percentual_Minuto_Extra, setPercentual_Minuto_Extra] = useState();

  function submit() {
    props.setData((x) => [
      ...x,
      {
        Nome: nome,
        Franquia: franquia,
        Percentual_Minuto_Extra: percentual_Minuto_Extra,
      },
    ]);
    props.handleOpen();
  }

  return props.isOpen ? (
    <>
      <div className="Modal" onClick={() => props.handleOpen()}></div>
      <div className="Window">
        <div className="title">
          <h2>Cadastro de Planos</h2>
          <button className="exit" onClick={() => props.handleOpen()}>
            X
          </button>
        </div>

        <div className="form">
          <span>Nome</span>
          <input onChange={(e) => setNome(e.target.value)} />
          <span>Franquia</span>
          <input type="number" onChange={(e) => setFranquia(e.target.value)} />
          <span>Percentual_Minuto_Extra</span>
          <input onChange={(e) => setPercentual_Minuto_Extra(e.target.value)} />
        </div>
        <button onClick={() => submit()} className="submit">
          Submit
        </button>
      </div>
    </>
  ) : null;
};

export default ModalAdd;
