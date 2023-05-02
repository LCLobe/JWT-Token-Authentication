import React, { createContext, useContext, useState, useEffect} from "react";
import {fetchPrivate} from "../utils/fetchPrivate.js";
import handleLogin from "../utils/handleLogin.js";

const Context = createContext();

export const ContextProvider = ({children}) => {

    const [myUserInfo, setMyUserInfo] = useState([]);
    
        //Hooks

    
        //LocalStorage

        //Flux Context Info
    const store ={ 
    };
    const actions ={   
        fetchPrivate,
        handleLogin
    };

    return (
        <Context.Provider value={{store, actions}}>
            {children}
        </Context.Provider>
        );

}

const useAppContext = ()=>useContext(Context);
export default useAppContext;