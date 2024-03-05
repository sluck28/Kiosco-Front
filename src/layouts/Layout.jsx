import { Outlet } from "react-router-dom"
/**Outlet para importar el children */
export default function Layout() {
  return (
    <div>
        Layout
        {/* Aqui se manda a traer los layouts children*/}
        <Outlet />
    </div>
  )
}
