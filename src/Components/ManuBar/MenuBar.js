import React, { useEffect, useState } from "react";

import { ReactComponent as FindIcon } from "../../assets/find.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import "./MenuBar.css";

const MenuBar = (props) => {
  const [value, setValue] = useState("");
  const [allSelected, setAllSelected] = useState();

  useEffect(() => {
    var obj = {};

    props.selected.forEach((el, index) => {
      obj[el] = index;
    });

    var check = props.sliced.every((el) => {
      return obj[el.id] !== undefined;
    });
    setAllSelected(check);
  }, [props.selected, props.sliced]);

  function find(e) {
    let d = [];

    for (let i = 0; i < props.data.length; i++) {
      for (var key in props.data[i]) {
        if (props.data[i][key].toString().includes(value)) {
          d.push(props.data[i]);
          break;
        }
      }
    }

    props.setFilterData(d);
  }

  function addRemove(e) {
    if (allSelected) {
      var obj = [];

      props.sliced.forEach((el) => {
        obj.push(el.id);
      });

      props.setSelected(props.selected.filter((s) => !obj.includes(s)));
    } else {
      var concated = props.sliced.map((x) => x.id).concat(props.selected);
      var filtered = concated.filter(
        (item, pos) => concated.indexOf(item) === pos
      );

      props.setSelected(filtered);
    }
  }

  function closeSelector() {
    props.setSelected([]);
    setValue("");
  }

  return (
    <div className="form-control">
      <span>Consulta</span>

      {props.selected.length === 0 ? (
        <>
          <div className="form-search1">
            <button
              className="Add"
              type="button"
              onClick={() => props.setModalAdd(true)}
            >
              <Plus />
            </button>
          </div>
          <div className="form-search">
            <button type="button" onClick={(e) => find(e)}>
              <FindIcon />
            </button>
            <input
              className="find"
              placeHolder="Pesquisar"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </>
      ) : (
        <div className="form-selected">
          <div className="selectors">
            <input
              className="selectionBox"
              type="checkbox"
              checked={allSelected}
              onClick={(e) => addRemove(e)}
            />
            <span id="counter">
              Selecionado(s): <b>&nbsp; {props.selected.length}</b>
            </span>
          </div>

          <div class="buttons">
            <Trash onClick={() => props.remove()} />
            <button className="close" onClick={() => closeSelector()}>
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
