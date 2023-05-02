import React, { createContext, useContext} from "react";

const Context = createContext();

export const ContextProvider = ({children}) => {

        //Hooks

    
        //LocalStorage

        //Flux Context Info

    const store ={ 
    };
    const actions ={   
    };

    return (
        <Context.Provider value={{store, actions}}>
            {children}
        </Context.Provider>
        );

}

const useAppContext = ()=>useContext(Context);
export default useAppContext;