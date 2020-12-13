import React, { memo } from "react";

import "./Plano.css";

const Plano = (props) => {
  return (
    <>
      <div
        className={
          props.isSelected
            ? "conteudoPrincipal-cursos-link selected"
            : "conteudoPrincipal-cursos-link"
        }
        onDoubleClick={() => props.handleOpen(props.item)}
      >
        <input
          type="checkbox"
          defaultValue={true}
          checked={props.isSelected}
          onClick={() => props.handleSelectedPlano(props.item.id)}
        />
        <li key={props.item}>
          <ul>
            <b>Nome:</b> {props.item.Nome}
          </ul>
          <ul>
            <b>Franquia:</b> {props.item.Franquia}
          </ul>
          <ul>
            <b>Percentual_Minuto_Extra:</b> {props.item.Percentual_Minuto_Extra}
          </ul>
        </li>
      </div>
    </>
  );
};

export default memo(Plano);
