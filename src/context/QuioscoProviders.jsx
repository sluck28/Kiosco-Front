import { createContext,useState } from "react";
/** Usestate se define los datos que puedan cambiar o dinamicas */
import { categorias as categoriasDB} from "../data/categorias";



const QuioscoContext = createContext();

const QuioscoProvider = ({children}) =>{
    /**reTORNA 2 valores */
    const [categorias, setCategorias]=useState(categoriasDB);
    
    /**Lo que se returna en el return es lo que se tiene acceso */
    const [categoriaActual,setCategoriaActual]=useState(categorias[0])
    /**Evento ara mostrar la categoria */
    const handleClickCategoria = id =>{
        /**Creamos un objeto con el filtrado de la categoria */
        const categoria = categorias.filter(categoria  => categoria.id=== id)[0]
       setCategoriaActual(categoria)
       
    }
    /**creamos nuestras variables */
    const [modal,setModal]=useState(false);

    /**Funcion para mostrar la modal */
    const handleClickModal = () => {
        setModalIsOpen(!modal);
    };

    
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                handleClickModal,
                modal
             }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider
}

export default QuioscoContext