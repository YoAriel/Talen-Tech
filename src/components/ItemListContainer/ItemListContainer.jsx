import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemLIstContainer.css";

import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categorias } = useParams();

  useEffect(() => {
    // fetch("/data/products.json")
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("hubo un problema al buscar productos");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => setProducts(data))

    getProducts(categorias)
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const category = categorias
    ? products.filter((prod) => prod.category === categorias)
    : products;

  return (
    <section>
      {/* <h1>Lista de porductos</h1>
      <div className="container-article">
        <ItemList list={products} />
      </div> */}

      <h1>{categorias ? `Categoría: ${categorias}` : "Lista de productos"}</h1>
      <div className="container-article">
        <ItemList list={category} />
      </div>
    </section>
  );
};
