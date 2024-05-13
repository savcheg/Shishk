import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./consts";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";

export const authRoutes = [
    {path: HOME_ROUTE, element: <Home/>}
]

export const publicRoutes = [
    {path: LOGIN_ROUTE, element: <Auth action={'login'}/>},
    {path: REGISTRATION_ROUTE, element: <Auth action={'registration'}/>}
]