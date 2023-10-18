import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Brand = ({ brand }) => {
  const { name, logo, id } = brand;
  return (
    <Link to={`/brands/${id}`}>
    <div data-aos="zoom-in" className="flex flex-col justify-between items-center bg-secondery/90 dark:bg-gray-600 text-text dark:text-background h-80 rounded-md shadow-md hover:shadow-xl transition duration-100 cursor-pointer group">
      <div className="my-auto">
        <img className="w-52 drop-shadow-2xl" src={logo} alt="" />
      </div>
      <h1 className="font-medium text-3xl my-6  drop-shadow-2xl pb-1 px-1 group-hover:border-b-4 border-text dark:border-background transition-all duration-100">
        {name}
      </h1>
    </div>
    </Link>
  );
};

Brand.propTypes = {
  brand: PropTypes.object.isRequired
}

export default Brand;
