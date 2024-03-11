/**Outlet para importar el children */
import { Outlet } from "react-router-dom"
/**Importando componentes */
import Sidebar from "../components/sidebar"
import Resumen from "../components/resumen"
import useQuiosco from "../hooks/useQuiosco"


export default function Layout() {
  const {modal} = useQuiosco();
  console.log(modal)
  
  return (

    <div className="md:flex">
        <Sidebar />

        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
        {/* Aqui se manda a traer los layouts children*/}
        <Outlet />
        </main>

       <Resumen />
    </div>
  )
}
