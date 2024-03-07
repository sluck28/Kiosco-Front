import { createContext } from "react";

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) =>{
    
    /**Lo que se returna en el return es lo que se tiene acceso */
    return (
        <QuioscoContext.Provider
            value={{ }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider
}

export default QuioscoContext