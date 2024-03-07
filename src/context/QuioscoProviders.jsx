import { createContext,useState } from "react";
import { categorias } from "../data/categorias";



const QuioscoContext = createContext();

const QuioscoProvider = ({children}) =>{
    
    const [categorias, setCategorias]=useState();

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