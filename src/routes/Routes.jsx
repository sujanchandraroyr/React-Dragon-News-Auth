import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import News from "../pages/News/News";
import Privateroutes from "./Privateroutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/news/:id",
                element: <Privateroutes><News></News></Privateroutes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }    
]);

export default router;