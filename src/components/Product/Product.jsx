import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { name, brand, type, price, rating, image } = product;
  return (
    <div className="bg-white dark:bg-gray-600 shadow-lg flex flex-col items-center px-6  py-4 justify-between group rounded-md hover:drop-shadow-xl transition-all duration-100">
      <div className="relative">
        <img
          src={image}
          className="w-64 h-64 mx-auto rounded-lg group-hover:p-0 transition duration-100 relative"
          alt=""
        />
        <p className="absolute top-2 right-1 text-lg font-normal text-text">
          <AiFillStar className="inline text-lg text-primary"></AiFillStar>{" "}
          {rating}
        </p>
      </div>
      <div className="font-medium">
        <div className="flex flex-col">
          <h4 className="text-lg font-medium">{name}</h4>
          <span className="text-sm">{type}</span>
        </div>
        <div className="flex gap-8">
          <p className="font-light">{brand}</p>
          <p>
            <span className="font-light">Price:</span> {price}
          </p>
        </div>
        <div className="flex gap-2 items-center my-3">
          <button className="py-1 px-2 text-white bg-primary hover:bg-white hover:text-black rounded-md transition duration-100">
            Details
          </button>
          <button className="py-1 px-2 text-white bg-primary hover:bg-white hover:text-black rounded-md transition duration-100">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
