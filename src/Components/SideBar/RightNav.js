import React from "react";
import "./RightNav.css";

import { ReactComponent as FindIcon } from "../../assets/find.svg";

const RightNav = (props) => {
  return (
    <div className={props.open ? "RightNav open" : "RightNav closed"}>
      <div className="rightNavHeader">
        <p>Filtros</p>
      </div>
      <div className="buttonSearch">
        <button className="findMenu" onClick={() => props.filter()}>
          <FindIcon />
        </button>
      </div>
      <div className="rightNavBody">{props.children}</div>
    </div>
  );
};

export default RightNav;
