import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  return (
    <div className="container-detail">
      <h1>Detalles Del Producto</h1>
      <Item {...detail}>
        <div className="container-button">
          <button
            onClick={() => {
              addItem(detail);
            }}
          >
            {" "}
            Enviar al carrito
          </button>
        </div>
      </Item>
    </div>
  );
};
