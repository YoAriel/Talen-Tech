import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {
  return (
    <article className="producto-item">
      <img src={imageUrl} alt={description} />
      <h2 className="producto-title">{name}</h2>
      <p>Precio: ${price}</p>
      <p>description: {description}</p>
      {children}
    </article>
  );
};
