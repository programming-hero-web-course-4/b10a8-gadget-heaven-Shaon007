import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget;
  // const navigate = useNavigate();

  return (
    <div className="w-[322px] flex flex-grow">
      <div className="bg-base-100 w-[282px] shadow-xl rounded-xl">
        <figure>
          <img
            className="w-[282px] pt-4 h-[182px] object-contain"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body flex flex-col flex-1">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <Link
              to={`/product/${product_id}`}
              className="btn px-8 rounded-full bg-white border-2 border-violet-400"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
