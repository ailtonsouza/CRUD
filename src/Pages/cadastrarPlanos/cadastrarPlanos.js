import React, { useEffect, useState } from "react";
// import "./cadastrarPlanos.css";
import Burguer from "../../Components/SideBar/burguer";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Plano from "../../Components/PlanoComponents/Plano/Plano";
import Pagination from "../../Components/Pagination/Pagination";
import ModalAddPlano from "../../Components/PlanoComponents/ModalAddPlano/ModalAddPlano";
import ModalEditPLano from "../../Components/PlanoComponents/ModalEditPlano/ModalEditPlano";
import Input from "../../Components/SideBar/Input/input";
import Selector from "../../Components/SideBar/Selector/selector";
import RightNav from "../../Components/SideBar/RightNav";
import json from "./planos.json";
import customFilter from "../../hooks/customFilter";
import customSelectors from "../../hooks/customSelectors";

const CadastrarPlano = () => {
  const [data, setData] = useState(json);

  const [open, setOpen] = useState(0);
  const [slicedData, setSlicedData] = useState([...data].slice(0, 10));
  const [filterData, setFilterData] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [selected, setSelected] = useState([]);
  const [edited, setEdited] = useState({});
  const [filters, setFilters] = useState([]);

  function handleSelectedPlano(id) {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  }

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  function remove() {
    const a = data.filter((d) => !selected.includes(d.id));
    setSelected([]);
    setData(a);
  }

  function openModalEdit(e) {
    setEdited(e);
    setModalEdit(!modalEdit);
  }

  function closeModalEdit() {
    setModalEdit(!modalEdit);
  }

  function filter() {
    let d = data;
    console.log(filters);
    for (let i = 0; i < filters.length; i++) {
      if (filters[i].inputValue.length > 0) {
        d = customFilter(filters[i], d);
      }
    }
    console.log(d);
    setFilterData(d);
  }

  const { stringSimbols } = customSelectors();

  return (
    <>
      <RightNav open={open} filter={() => filter()}>
        <Input type={"string"} label="Nome" setFilters={setFilters}>
          <Selector selectors={stringSimbols} />
        </Input>
        <Input type={"string"} label="Franquia" setFilters={setFilters}>
          <Selector selectors={stringSimbols} />
        </Input>
        <Input
          type={"string"}
          label="Percentual_Minuto_Extra"
          setFilters={setFilters}
        >
          <Selector selectors={stringSimbols} />
        </Input>
      </RightNav>

      <div className={open ? "SideBarOpen" : "SideBarClosed"}>
        <div className="breadCrumb">
          <Burguer setOpen={() => setOpen(!open)} />
          <h1>Cadastrar &gt; Planos</h1>
        </div>

        <MenuBar
          data={data}
          setFilterData={setFilterData}
          selected={selected}
          setSelected={setSelected}
          sliced={slicedData}
          setModalAdd={setModalAdd}
          remove={remove}
        />

        <div className="screenItems">
          <div className="items">
            {slicedData.map((item) => (
              <Plano
                item={item}
                handleSelectedPlano={handleSelectedPlano}
                isSelected={selected.includes(item.id)}
                handleOpen={(e) => openModalEdit(e)}
              />
            ))}
          </div>
        </div>
        <Pagination data={filterData} setSlicedData={setSlicedData} />
      </div>

      <ModalAddPlano
        isOpen={modalAdd}
        handleOpen={() => setModalAdd(!modalAdd)}
        setData={setData}
      />
      <ModalEditPLano
        isOpen={modalEdit}
        handleOpen={closeModalEdit}
        data={edited}
        setDataEdited={setData}
      />
    </>
  );
};

export default CadastrarPlano;
