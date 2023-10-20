import axios from "axios";
import toast from "react-hot-toast";

const AddProduct = () => {
  const handelAddProduct = (event) => {
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
      .post("http://localhost:5000/products", productData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const data = res.data;
        if (data.acknowledged) {
          toast.success("Successfully Added!");
          form.reset();
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
    <div className="min-h-[93vh] my-10">
      <div className="md:w-8/12 mx-auto bg-background dark:bg-gray-600 py-8 md:px-10 px-2 rounded-md shadow-lg">
        <div className="text-center">
          <h3 className="font-bold text-3xl mb-4 drop-shadow-md">
            Add New Product
          </h3>
          <p className="max-w-3xl mx-auto font-medium">
            Introduce your latest tech marvel to our collection. Fill out the
            form below to add a new product to our offerings.
          </p>
        </div>
        <form
          onSubmit={handelAddProduct}
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
              className="py-2 px-3 rounded-md w-full outline-none dark:bg-slate-900 dark:placeholder:text-white"
            />
          </div>
          <div>
            <label htmlFor="type" className="block font-medium my-2 text-lg">
              Type:
            </label>
            <select name="type" defaultValue={"Select Product Types"} className="select w-full bg-white dark:bg-gray-900  outline-none border-0">
              <option>
                Select Product Types
              </option>
              {
                categories.map((category, indx) => <option className="" key={indx}>{category}</option>)
              }
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
              className="py-2 px-3 rounded-md w-full outline-none dark:bg-slate-900 dark:placeholder:text-white"
            />
          </div>
          <div>
            <label htmlFor="rating" className="block font-medium my-2 text-lg">
              Rating:
            </label>
            <input
              placeholder="Product Rating..."
              type="text"
              name="rating"
              id="rating"
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
              className="py-2 px-3 rounded-md w-full outline-none dark:bg-slate-900 dark:placeholder:text-white"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="detail" className="block font-medium my-2 text-lg">
              Short description:
            </label>
            <input
              placeholder="Product Short description..."
              type="text"
              name="detail"
              id="detail"
              className="py-2 px-3 rounded-md w-full outline-none dark:bg-slate-900 dark:placeholder:text-white"
            />
          </div>
          <input
            type="submit"
            value="Add Product"
            className="py-2 px-3 rounded-md bg-primary md:col-span-2 font-medium text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
