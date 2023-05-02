import React from "react";
import { createBrowserRouter } from "react-router-dom";

import CreateUser from "../views/CreateUser.jsx";
import Login from "../views/Login.jsx";
import UserPrivateView from "../views/UserPrivateView.jsx";
import Layout from "../views/Layout.jsx";

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