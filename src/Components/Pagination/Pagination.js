import React, { memo, useState } from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // const [startFrom] = useState(1);
  const perPage = itemsPerPage ? itemsPerPage : 10;
  const pages = Math.ceil(props.data.length / perPage);
  const pagination = [];
  const [currentPage, setCurrentPage] = useState(1);

  props.setSlicedData(props.data);

  if ((pages < currentPage && props.data.length > 0) || currentPage === 0) {
    props.setSlicedData([...props.data].slice(0, perPage));
    setCurrentPage(1);
  } else {
    props.setSlicedData(
      [...props.data].slice((currentPage - 1) * perPage, currentPage * perPage)
    );
  }

  let ellipsisLeft = false;
  let ellipsisRight = false;
  for (let i = 1; i <= pages; i++) {
    if (i === currentPage) {
      pagination.push({ id: i, current: true, ellipsis: false });
    } else {
      if (
        i < 2 ||
        i > pages - 1 ||
        i === currentPage - 1 ||
        i === currentPage + 1
      ) {
        pagination.push({ id: i, current: false, ellipsis: false });
      } else if (i > 1 && i < currentPage && !ellipsisLeft) {
        pagination.push({ id: i, current: false, ellipsis: true });
        ellipsisLeft = true;
      } else if (i < pages && i > currentPage && !ellipsisRight) {
        pagination.push({ id: i, current: false, ellipsis: true });
        ellipsisRight = true;
      }
    }
  }
  const changePage = (page, e) => {
    e.preventDefault();
    if (page !== currentPage) {
      setCurrentPage(page);
      props.setSlicedData(
        [...props.data].slice((page - 1) * perPage, page * perPage)
      );
    }
  };
  const goToPrevPage = (e) => {
    e.preventDefault();
    setCurrentPage((prevVal) => (prevVal - 1 === 0 ? prevVal : prevVal - 1));
    if (currentPage !== 1) {
      props.setSlicedData(
        [...props.data].slice(
          (currentPage - 2) * perPage,
          (currentPage - 1) * perPage
        )
      );
    }
  };
  const goToNextPage = (e) => {
    e.preventDefault();
    setCurrentPage((prevVal) => (prevVal === pages ? prevVal : prevVal + 1));
    if (currentPage !== pages) {
      props.setSlicedData(
        [...props.data].slice(
          currentPage * perPage,
          (currentPage + 1) * perPage
        )
      );
    }
  };
  const setItemsPerPagee = (e) => {
    e.preventDefault();
    setItemsPerPage(+e.target.value);
    if (currentPage > Math.ceil(props.data.length / +e.target.value)) {
      setCurrentPage(Math.ceil(props.data.length / +e.target.value));
      props.setSlicedData(
        [...props.data].slice(
          (Math.ceil(props.data.length / +e.target.value) - 1) *
            +e.target.value,
          Math.ceil(props.data.length / +e.target.value) * +e.target.value
        )
      );
    } else {
      props.setSlicedData(
        [...props.data].slice(
          (currentPage - 1) * +e.target.value,
          currentPage * +e.target.value
        )
      );
    }
  };

  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <nav className="pagination">
      <span>Nº Items da pagina:</span>
      <select
        className="pages"
        id="pages"
        onChange={(e) => setItemsPerPagee(e)}
      >
        <span>Nº Items:</span>
        <option value={10}>{10}</option>
        <option value={20}>{20}</option>
        <option value={30}>{30}</option>
        <option value={40}>{40}</option>
        <option value={50}>{50}</option>
        <option value={60}>{60}</option>
        <option value={80}>{80}</option>
        <option value={90}>{90}</option>
        <option value={100}>{100}</option>
      </select>
      <span>Pagina:</span>
      <select
        className="pages"
        id="pages"
        onChange={(e) => changePage(+e.target.value, e)}
      >
        {pagesArray.map((number) => (
          <option
            key={number}
            selected={number === currentPage ? "selected" : null}
            value={number === currentPage ? number : null}
          >
            {number}
          </option>
        ))}
      </select>
      <a
        href="/#"
        className="pagination-previous"
        onClick={(e) => goToPrevPage(e)}
      >
        Previous
      </a>
      <ul className="pagination-list">
        {pagination.map((page) => {
          if (!page.ellipsis) {
            return (
              <li key={page.id}>
                <a
                  href="/#"
                  className={
                    page.current
                      ? "pagination-link is-current"
                      : "pagination-link"
                  }
                  onClick={(e) => {
                    changePage(page.id, e);
                  }}
                >
                  {page.id}
                </a>
              </li>
            );
          } else {
            return (
              <li key={page.id}>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
            );
          }
        })}
      </ul>
      <a href="/#" className="pagination-next" onClick={(e) => goToNextPage(e)}>
        next
      </a>
      <span>Items: {props.data.length}</span>
    </nav>
  );
};

export default memo(Pagination);
