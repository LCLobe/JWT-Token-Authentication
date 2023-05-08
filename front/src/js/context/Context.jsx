import React, { createContext, useContext, useState, useEffect} from "react";
import {fetchPrivate} from "../utils/fetchPrivate.js";
import handleLogin from "../utils/handleLogin.js";
import handleCreateUser from "../utils/handleCreateUser.js";
import isUserLoggedIn from "../utils/isUserLoggedIn.js";

const Context = createContext();

export const ContextProvider = ({children}) => {

    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const [token, setToken] = useState(window.localStorage.getItem("jwt-token"));

    //Hooks


    //LocalStorage
    useEffect(()=>{
        isUserLoggedIn(setUserIsLoggedIn,fetchPrivate);
        console.log("Contexto: ", userIsLoggedIn,token);
        }
    ,[token]);

    //Flux Context Info
    const store ={
        userIsLoggedIn 
    };
    const actions ={   
        fetchPrivate,
        handleLogin,
        handleCreateUser,
        setToken,
        setUserIsLoggedIn
    };

    return (
        <Context.Provider value={{store, actions}}>
            {children}
        </Context.Provider>
        );

}

const useAppContext = ()=>useContext(Context);
export default useAppContext;