import { createBrowserRouter } from "react-router-dom";
import RootElement from "../RootElement";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/AuthenticationPage/Login";
import BrandDetail from "../pages/BrandDetail";
import ProductDetail from "../pages/ProductDetail";
import UpdateProduct from "../pages/UpdateProduct";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/AuthenticationPage/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <RootElement></RootElement>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/my-cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/brands/:id',
                element: <BrandDetail></BrandDetail>,
                loader: ({params}) => fetch(`https://tech-titan-server.vercel.app/brands/${params.id}`)
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute> ,
                loader: ({params}) => fetch(`https://tech-titan-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://tech-titan-server.vercel.app/products/${params.id}`)
            },
        ]
    }
])

export default MainRoutes;