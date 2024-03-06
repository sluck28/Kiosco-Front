/**Outlet para importar el children */
import { Outlet } from "react-router-dom"
/**Importando componentes */
import Sidebar from "../components/sidebar"
import Resumen from "../components/resumen"



export default function Layout() {
  return (

    <div className="md:flex">
        <Sidebar />

        <main className="flex-1">
        {/* Aqui se manda a traer los layouts children*/}
        <Outlet />
        </main>

       <Resumen />
    </div>
  )
}
