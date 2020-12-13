import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as ArrowIcon } from "../../../../assets/arrow.svg";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "./DropDownCadastrar.css";
import BackDrop from "../../../../Components/UI/Backdrop/Backdrop";

function DropDown(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(dprops) {
    return (
      <Link
        to={dprops.adress && `${dprops.adress}`}
        className="menu-item"
        onClick={
          dprops.goToMenu
            ? () => setActiveMenu(dprops.goToMenu)
            : props.config()
        }
      >
        <span className="icon-button">{dprops.leftIcon}</span>
        {dprops.children}
        <span className="icon-right">{dprops.rightIcon}</span>
      </Link>
    );
  }

  return (
    <>
      <BackDrop isOpen={true} handleOpen={props.config()} />
      <div
        className="dropdown"
        style={{ height: menuHeight }}
        ref={dropdownRef}
      >
        <CSSTransition
          in={activeMenu === "main"}
          timeout={0}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            {/* <DropdownItem goToMenu="settings">Settings</DropdownItem> */}
            <DropdownItem adress="/Tarifas">Tarifas</DropdownItem>
            <DropdownItem adress="/Planos">Planos</DropdownItem>
            <DropdownItem adress="/DDD">DDD</DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "settings"}
          timeout={0}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h4>Voltar</h4>
            </DropdownItem>
            <DropdownItem>HTML</DropdownItem>
            <DropdownItem>CSS</DropdownItem>
            <DropdownItem>JavaScript</DropdownItem>
            <DropdownItem>Awesome!</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default DropDown;
