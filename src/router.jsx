import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Authlayout from "./layouts/Authlayout";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";


const router = createBrowserRouter(
    [
        {   
            /**
             * Pagina principal
             */
            path: "/",
            
            /**Componente al visitar la pag principal */
             element:<Layout/>,
             /**Nos permite agregar ciertos layouts children al principal */
             children:
             [
                {
                    index:true,
                    element: <Inicio/>,
                }
             ]


        },
        {
            path:"/auth",
            element:<Authlayout/>,
            children:[
                {
                    /**Index true para cargar el componente */
                    index:true,
                    element: <Login/>,
                },
                {
                    path:"/registro",
                    element:<Registro/>
                
                }
            ]
        }
    ]
);

export default router;