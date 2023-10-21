import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedData = useLoaderData();
  const { name, brand, type, price, rating, image, _id, detail } = loadedData;
  const handelUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.photo.value;
    const detail = form.detail.value;
    const productData = {
      name,
      brand,
      type,
      price,
      rating,
      image,
      detail,
    };
    axios
      .put(`https://tech-titan-server.vercel.app/products/${_id}`, productData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully Updated!");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const categories = [
    "Smartphones",
    "Laptops and Computers",
    "Audio and Headphones",
    "Gaming and Entertainment",
    "Home Appliances",
    "Wearables and Accessories",
    "Cameras and Photography",
    "Software and Apps",
    "Smart Home and IoT",
    "Office and Productivity",
    "Health and Fitness",
    "Fashion Tech",
    "Electronics Components",
    "Security and Surveillance",
    "Toys and Gadgets",
    "Networking and Connectivity",
    "Outdoor and Adventure",
    "Drones and Robotics",
    "Virtual Reality",
    "Artificial Intelligence",
  ];
  return (
    <div data-aos="fade-up">
      <div className="min-h-[93vh] my-10">
        <div className="md:w-8/12 mx-auto bg-background dark:bg-gray-600 py-8 md:px-10 px-2 rounded-md shadow-lg">
          <div className="text-center">
            <h3 className="font-bold text-3xl mb-4 drop-shadow-md">
              Update <span className="text-primary">{name}'s </span>
              Information
            </h3>
            <p className="max-w-3xl mx-auto font-medium">
              Keep your product information up to date. Use the form below to
              make changes or improvements to existing offerings.
            </p>
          </div>
          <form
            onSubmit={handelUpdateProduct}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div>
              <label htmlFor="name" className="block font-medium my-2 text-lg">
                Name:
              </label>
              <input
                placeholder="Product Name..."
                type="text"
                name="name"
                id="name"
                defaultValue={name}
                className="py-2 px-3 rounded-md w-full outline-none dark:bg-slate-900 dark:placeholder:text-white"
              />
            </div>
            <div>
              <label htmlFor="brand" className="block font-medium my-2 text-lg">
                Brand Name:
              </label>
              <input
                placeholder="Brand Name..."
                type="text"
                name="brand"
                id="brand"
                defaultValue={brand}
                className="py-2 px-3 rounded-md w-full outline-none dark:bg-slate-900 dark:placeholder:text-white"
              />
            </div>
            <div>
              <label htmlFor="type" className="block font-medium my-2 text-lg">
                Type:
              </label>
              <select
                name="type"
                defaultValue={type}
                className="select w-full bg-white dark:bg-gray-900  outline-none border-0">
                <option>Select Product Types</option>
                {categories.map((category, indx) => (
                  <option className="" key={indx}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block font-medium my-2 text-lg">
                Price:
              </label>
              <input
                placeholder="Product Price..."
                type="text"
                name="price"
                id="price"
                defaultValue={price}
                className="py-2 px-3 rounded-md w-full outline-none dark:bg-slate-900 dark:placeholder:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block font-medium my-2 text-lg">
                Rating:
              </label>
              <input
                placeholder="Product Rating..."
                type="text"
                name="rating"
                id="rating"
                defaultValue={rating}
                className="py-2 px-3 rounded-md w-full outline-none dark:bg-slate-900 dark:placeholder:text-white"
              />
            </div>
            <div>
              <label htmlFor="photo" className="block font-medium my-2 text-lg">
                Image:
              </label>
              <input
                placeholder="Product Image URL..."
                type="text"
                name="photo"
                id="photo"
                defaultValue={image}
                className="py-2 px-3 rounded-md w-full outline-none dark:bg-slate-900 dark:placeholder:text-white"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="detail"
                className="block font-medium my-2 text-lg">
                Short description:
              </label>
              <input
                placeholder="Product Short description..."
                type="text"
                name="detail"
                id="detail"
                defaultValue={detail}
                className="py-2 px-3 rounded-md w-full outline-none dark:bg-slate-900 dark:placeholder:text-white"
              />
            </div>
            <input
              type="submit"
              value="Update Product"
              className="py-2 px-3 rounded-md bg-primary md:col-span-2 font-medium text-white cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
