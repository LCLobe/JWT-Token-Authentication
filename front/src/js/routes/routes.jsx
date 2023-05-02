import React from "react";
import { createBrowserRouter } from "react-router-dom";

import CreateUser from "../views/createUser.jsx";
import Login from "../views/login.jsx";
import UserPrivateView from "../views/userPrivateView.jsx";

export const Router = createBrowserRouter([
    {
        path: '/'  ,
        element: <Layout />,
        children: [
            {
                path: '/Singin', 
                element: <CreateUser />
            },
            {
                path: '/Login'  ,
                element: <Login />,
            } ,
            {
                path: '/dashboard'  ,
                element: <UserPrivateView />,
            } ,


    ]
    }
]);