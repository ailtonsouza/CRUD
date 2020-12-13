import React, { memo } from "react";

import "./Tarifa.css";

const Tarifa = (props) => {
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
          onClick={() => props.handleSelectedDDD(props.item.id)}
        />
        <li key={props.item.id}>
          <ul>
            <b>Prefixo:</b> {props.item.Prefixo}
          </ul>
          <ul>
            <b>Estado:</b> {props.item.Estado}
          </ul>
          <ul>
            <b>Cidade_Região:</b> {props.item.Cidade_Região}
          </ul>
        </li>
      </div>
    </>
  );
};

export default memo(Tarifa);
