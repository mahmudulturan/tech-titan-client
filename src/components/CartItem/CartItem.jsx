import PropTypes from 'prop-types';
const CartItem = ({product}) => {
    const { name, brand, type, price, image } = product;
    return (
        <div className="flex gap-6 items-center justify-evenly my-5 bg-white dark:bg-gray-600 shadow-lg rounded-md hover:drop-shadow-xl transition-all duration-100">
            <img src={image} className="w-40" alt="" />
            <div>
            <p className="text-sm font-light">{type}</p>
            <h4 className="text-xl font-medium w-44 overflow-hidden">{name}</h4>
            <p className="font-light text-lg">{brand}</p>
            </div>
            <p className="text-lg font-normal">Price: {price}</p>
            <button className="py-2 px-4 rounded-md text-white bg-primary font-medium">Delete</button>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.object.isRequired
}
export default CartItem;