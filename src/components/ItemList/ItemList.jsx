import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "../ItemList/ItemList.css";

export const ItemList = ({ list }) => {
  return (
    <>
      {list.length ? (
        list.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id}>
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <h3>No hay productos</h3>
      )}
    </>
  );
};
