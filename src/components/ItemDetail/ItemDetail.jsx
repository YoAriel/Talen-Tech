import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  //agrega atributo quantity sin mutar
  const handleAdd = (quantity) => {
    addItem({ ...detail, quantity }); //Implicito , el nombre de la clave en este caso va ser quantity
  };

  return (
    <div className="container-detail">
      <h1>Detalles Del Producto</h1>
      <Item {...detail}>
        <div className="container-button">
          {/* <button
            onClick={() => {
              addItem(detail);
            }}
          >
            Enviar al carrito
          </button> */}

          <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />
        </div>
      </Item>
    </div>
  );
};
