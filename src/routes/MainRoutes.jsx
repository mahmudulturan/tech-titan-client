import { createBrowserRouter } from "react-router-dom";
import RootElement from "../RootElement";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import BrandDetail from "../pages/BrandDetail";

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
        ]
    }
])

export default MainRoutes;