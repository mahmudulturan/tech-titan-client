import PropTypes from "prop-types";
import axios from "axios";
import { useContext } from "react";
import toast from 'react-hot-toast';
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const CartItem = ({ product, setCart, cart }) => {
  const { name, brand, type, price, image, _id } = product;
  const { user } = useContext(AuthContext);
  const email = user.email;
  const data = { _id, email };

  const handleRemoveCart = () => {
    console.log('clicked');
    axios
      .patch("https://tech-titan-server.vercel.app/cart/remove", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if(res.data.modifiedCount){
          toast.success('Remove from cart!')
          const newItems = cart.filter(item => item._id !== _id)
          setCart(newItems)
        }
      })
      .catch(() => toast.error('Unable to remove!'));
  };
  return (
    <div className="flex flex-col md:flex-row gap-1 py-1 md:gap-6 items-center justify-evenly my-5 bg-white dark:bg-gray-600 shadow-lg rounded-md hover:drop-shadow-xl transition-all duration-100">
      <img src={image} className="md:w-40 w-36" alt="" />
      <div>
        <p className="text-sm font-light">{type}</p>
        <h4 className="md:text-xl font-medium md:w-44 overflow-hidden">{name}</h4>
        <p className="font-light text-lg">{brand}</p>
      </div>
      <p className="md:text-lg font-normal">Price: {price}</p>
      <button
        onClick={handleRemoveCart}
        className="md:py-2 px-4 rounded-md text-white bg-primary font-medium">
        Delete
      </button>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  setCart: PropTypes.func,
  cart: PropTypes.array,
};
export default CartItem;
