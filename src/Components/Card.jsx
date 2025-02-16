import { Link } from "react-router-dom";
const Card = ({ product, handleRemove }) => {

  const { product_title, product_image, price, product_id } = product || {};

  return (
    <div className="flex relative">
      <Link
        to={`/product/${product_id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={product_image}
            alt=""
          />
        </figure>
        <div className="p-4">
          <h1 className="text-xl mb-2 font-bold">{product_title}</h1>
          <p className="mb-2">Price:{price}</p>
          <button className="btn btn-warning">view Details</button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
