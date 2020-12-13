import React, { useState, useEffect } from "react";
import "./ModalEditTarifa.css";

const ModalEditTarifa = (props) => {
  const [prefixo, setPrefixo] = useState();
  const [estado, setEstado] = useState();
  const [cidadeRegiao, setCidadeRegiao] = useState();

  useEffect(() => {
    setPrefixo(Object.values(props.data)[0]);
    setEstado(Object.values(props.data)[1]);
    setCidadeRegiao(Object.values(props.data)[2]);
  }, [props.data]);

  function setEdited() {
    props.setDataEdited((d) => [
      ...d.map((x) =>
        x.Prefixo === prefixo
          ? {
              Prefixo: prefixo,
              Estado: estado,
              Cidade_Região: cidadeRegiao,
            }
          : x
      ),
    ]);
    props.handleOpen();
  }

  return props.isOpen ? (
    <>
      <div className="Modal" onClick={() => props.handleOpen()}></div>

      <div className="Window">
        <div className="title">
          <h2>Edição de Tarifa</h2>
          <button className="exit" onClick={() => props.handleOpen()}>
            X
          </button>
        </div>

        <div className="form">
          <span>Prefixo</span>
          <input defaultValue={Object.values(props.data)[0]} disabled={true} />
          <span>Estado</span>
          <input
            defaultValue={Object.values(props.data)[1]}
            onChange={(e) => setEstado(e.target.value)}
          />
          <span>Cidade_Região</span>
          <input
            type="text"
            defaultValue={Object.values(props.data)[2]}
            onChange={(e) => setCidadeRegiao(e.target.value)}
          />
        </div>
        <button onClick={() => setEdited()} className="submit">
          Submit
        </button>
      </div>
    </>
  ) : null;
};

export default ModalEditTarifa;
