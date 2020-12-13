import React, { useState } from "react";
import "./ModalAdd.css";

const ModalAdd = (props) => {
  const [prefixo, setPrefixo] = useState();
  const [estado, setEstado] = useState();
  const [cidadeRegiao, setCidadeRegiao] = useState();

  function submit() {
    props.setData((x) => [
      ...x,
      {
        Prefixo: prefixo,
        Estado: estado,
        Cidade_Região: cidadeRegiao,
      },
    ]);
    props.handleOpen();
  }

  return props.isOpen ? (
    <>
      <div className="Modal" onClick={() => props.handleOpen()}></div>
      <div className="Window">
        <div className="title">
          <h2>Cadastro de DDD</h2>
          <button className="exit" onClick={() => props.handleOpen()}>
            X
          </button>
        </div>

        <div className="form">
          <span>Prefixo</span>
          <input onChange={(e) => setPrefixo(e.target.value)} />
          <span>Estado</span>
          <input onChange={(e) => setEstado(e.target.value)} />
          <span>Cidade_Região</span>
          <input onChange={(e) => setCidadeRegiao(e.target.value)} />
        </div>
        <button onClick={() => submit()} className="submit">
          Submit
        </button>
      </div>
    </>
  ) : null;
};

export default ModalAdd;
