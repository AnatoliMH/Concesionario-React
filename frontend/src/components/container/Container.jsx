import "./Container.css";
import Table from "../table/Table";
import Formulario from "../form/Formulario";
import Paginator from "../Paginator/Paginator";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Container = ({ title }) => {
  const [currentProducts, setProducts] = useState([]);
  const [currentFilters, setFilters] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [finalPage, setFinalPage] = useState(1);

  useEffect(() => {
    axios.get(getURL()).then((res) => {
      const { page, totalPages, products } = res.data;
      setCurrentPage(page);
      setFinalPage(totalPages);
      setProducts(products);
    });
  }, [currentFilters, currentPage]);

  const getURL = () => {
    let URL_PRODUCTS = "http://127.0.0.1:5000/products/search";
    if (currentFilters) {
      const { brand, color, price } = currentFilters;
      URL_PRODUCTS += `?brand=${brand || ""}&color=${color || ""}&price=${
        price || ""
      }`;
    } else {
      URL_PRODUCTS += "?brand=&color=&price=";
    }
    URL_PRODUCTS += `&page=${currentPage ? currentPage : 1}`;
    // console.log("URL => ", URL_PRODUCTS);
    return URL_PRODUCTS;
  };

  return (
    <div className="container">
      <Formulario title={title} setFilters={setFilters} />
      {currentProducts?.length && <Table data={currentProducts} />}
      {currentProducts?.length && (
        <Paginator
          currentPage={currentPage}
          finalPage={finalPage}
          next={() => {
            setCurrentPage((prev) => (prev === finalPage ? prev : ++prev));
          }}
          prev={() => {
            setCurrentPage((prev) => (prev === 1 ? prev : --prev));
          }}
        />
      )}
      {!currentProducts?.length && (
        <div className="contNoResults">
          <p>No existen resultados</p>
        </div>
      )}
    </div>
  );
};

export default Container;
