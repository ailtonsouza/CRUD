import React, { useState } from "react";
import "./NavigationItem.css";

const NavigationItem = (props) => {
  const [open, setOpen] = useState(false);

  const Component = () => {
    return React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        config: () => config,
      });
    });
  };

  const config = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <>
      <li className="NavigationItem" onClick={() => setOpen(!open)}>
        <div> {props.name}</div>
      </li>

      <span>{open && <Component />}</span>
    </>
  );
};

export default NavigationItem;
