import React, { useState, useEffect } from "react";
import "./ModalEditPlano.css";

const ModalEdit = (props) => {
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [franquia, setFranquia] = useState();
  const [percentual_Minuto_Extra, setPercentual_Minuto_Extra] = useState();

  useEffect(() => {
    console.log(id, nome, franquia, percentual_Minuto_Extra);
    setId(Object.values(props.data)[0]);
    setNome(Object.values(props.data)[1]);
    setFranquia(Object.values(props.data)[2]);
    setPercentual_Minuto_Extra(Object.values(props.data)[3]);
  }, [props.data]);

  function setEdited() {
    props.setDataEdited((d) => [
      ...d.map((x) =>
        x.id === id
          ? {
              id: id,
              Nome: nome,
              Franquia: franquia,
              Percentual_Minuto_Extra: percentual_Minuto_Extra,
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
          <h2>Edição de Plano</h2>
          <button className="exit" onClick={() => props.handleOpen()}>
            X
          </button>
        </div>

        <div className="form">
          <span>Nome</span>
          <input
            defaultValue={Object.values(props.data)[1]}
            onChange={(e) => setNome(e.target.value)}
          />
          <span>Franquia</span>
          <input
            defaultValue={Object.values(props.data)[2]}
            onChange={(e) => setFranquia(e.target.value)}
          />
          <span>Percentual_Minuto_Extra</span>
          <input
            type="text"
            defaultValue={Object.values(props.data)[3]}
            onChange={(e) => setPercentual_Minuto_Extra(e.target.value)}
          />
        </div>
        <button onClick={() => setEdited()} className="submit">
          Submit
        </button>
      </div>
    </>
  ) : null;
};

export default ModalEdit;
