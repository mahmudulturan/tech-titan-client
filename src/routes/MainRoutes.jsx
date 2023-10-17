import { createBrowserRouter } from "react-router-dom";
import RootElement from "../RootElement";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <RootElement></RootElement>
    }
])

export default MainRoutes;