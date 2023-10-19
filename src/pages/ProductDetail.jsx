import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import toast from 'react-hot-toast';


const ProductDetail = () => {
  const loadedData = useLoaderData();
  const { name, brand, type, price, rating, image, _id, detail } = loadedData;
  const { user } = useContext(AuthContext);
  const email = user.email;
  const data = { _id, email };

  const handleAddCart = () => {
    axios
      .patch("http://localhost:5000/cart", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if(res.data.modifiedCount){
          toast.success('Added to cart!')
        }
      })
      .catch(() => toast.error('Unable to add!'));
  };

  return (
    <div className=" md:w-8/12 lg:w-6/12 p-2 md:p-0 min-h-screen my-10 mx-auto">
      <div className="bg-white dark:bg-gray-600 shadow-lg px-3 md:px-6  py-4 justify-between group rounded-md hover:drop-shadow-xl transition-all duration-100">
        <div className="relative">
          <img
            src={image}
            className="w-96 md:h-96 h-60 mx-auto rounded-lg group-hover:p-0 transition duration-100 relative"
            alt=""
          />
          <p className="absolute top-2 right-1 text-xl font-normal">
            <AiFillStar className="inline text-lg text-primary"></AiFillStar>{" "}
            {rating}
          </p>
        </div>
        <div className="font-medium text-center space-y-6 my-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-medium">{name}</h4>
            <span className="text-sm">Category: {type}</span>
          </div>
          <div className="flex items-center justify-center gap-8">
            <p>
              <span className="font-light">Brand:</span> {brand}
            </p>
            <p>
              <span className="font-light">Price:</span> {price}
            </p>
          </div>
          <p>Short Description: {detail}</p>
          <button
            onClick={handleAddCart}
            className="py-2 px-4 my-3 text-white bg-primary hover:bg-white hover:text-black rounded-md transition duration-100">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
