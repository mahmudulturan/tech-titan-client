import Rating from "react-rating";
import { BsStar, BsStarFill, BsCurrencyDollar } from "react-icons/bs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewItem = ({ product }) => {
  const { name, price, rating, image, _id } = product;

  return (
    <div
      className="group flex flex-col justify-center items-center my-8 rounded-md"
      draggable>
      <div className="relative overflow-hidden bg-slate-600 rounded-md">
        <img src={image} className="w-96 h-[350px] py-4 px-4" alt="" />
        <div className="absolute -top-96 group-hover:top-0  duration-300 transition-transform flex items-center justify-center w-full h-full">
          <Link to={`/products/${_id}`}>
            <button className="py-2 px-4 text-white hover:bg-white hover:text-text bg-primary transition duration-150 font-medium">
              View Details
            </button>
          </Link>
        </div>
      </div>
      <h4 className="text-lg font-medium">{name}</h4>
      <div>

        <Rating
          className="text-xl text-yellow-400"
          initialRating={rating}
          emptySymbol={<BsStar></BsStar>}
          fullSymbol={<BsStarFill></BsStarFill>}
        />

      </div>
      <p className="font-medium text-primary flex items-center text-lg">
        <BsCurrencyDollar className="inline"></BsCurrencyDollar>
        {price}
      </p>
    </div>
  );
};

NewItem.propTypes = {
  product: PropTypes.object
};

export default NewItem;
