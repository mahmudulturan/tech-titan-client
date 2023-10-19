import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import CartItem from "../components/CartItem/CartItem";

const MyCart = () => {
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${email}`)
      .then((res) => setCart(res.data))
      .catch((error) => console.error(error));
  }, [email]);

  console.log(cart);
  return (
    <div className="md:w-10/12 mx-auto min-h-[93vh]">
      <div className="text-center">
        <h3 className="font-bold text-3xl mb-4 drop-shadow-md">
          Your Shopping Cart
        </h3>
        <p className="max-w-3xl mx-auto font-medium">
          Review and manage your selected tech products in one place. Explore,
          modify, and proceed to checkout with ease.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {
                cart?.map(product => <CartItem key={product._id} product={product}></CartItem>)
            }
      </div>
      <div className="text-center">
        <button className="py-3 px-5 my-6 bg-primary rounded-md font-medium text-white w-2/6">Finalize Purchase</button>
      </div>
    </div>
  );
};

export default MyCart;
