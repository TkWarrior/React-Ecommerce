import { createContext } from "react";

const searchContext = createContext();

const Searchprovider = ({children}) =>{
    
    <searchContext.Provider>
        {children}
    </searchContext.Provider>
}
