import { createBrowserRouter } from "react-router-dom";
import RootElement from "../RootElement";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import BrandDetail from "../pages/BrandDetail";
import ProductDetail from "../pages/ProductDetail";
import UpdateProduct from "../pages/UpdateProduct";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <RootElement></RootElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/my-cart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/brands/:id',
                element: <BrandDetail></BrandDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`)
            },
            {
                path: '/products/:id',
                element: <ProductDetail></ProductDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]
    }
])

export default MainRoutes;