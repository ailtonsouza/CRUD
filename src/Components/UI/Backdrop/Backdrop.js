import React from "react";
import "./Backdrop.css";

const backdrop = (props) =>
  props.isOpen ? (
    <div
      className="Backdrop"
      onClick={props.handleOpen && props.handleOpen}
    ></div>
  ) : null;
export default backdrop;
