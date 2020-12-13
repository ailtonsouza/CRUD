import React from "react";
import RightNav from "./RightNav";

import "./burguer.css";

const Burguer = (props) => {
  return (
    <>
      <div className="StyledBurguer" onClick={() => props.setOpen()}>
        <div />
        <div />
        <div />
      </div>
      {/* <RightNav open={props.open} children={props.children} /> */}
    </>
  );
};

export default Burguer;
