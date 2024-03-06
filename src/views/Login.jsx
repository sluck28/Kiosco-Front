import { Link } from "react-router-dom";

export default function login() {
  return (
    <div>
    <h1 className="text-4xl font-bold">Iniciar Sesion</h1>

    <p>Para crear un pedido debes de iniciar sesion</p>

    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="" noValidate>
          
          <div className="mb-4">
            <label className="text-slate-400 font-bold" htmlFor="email">
                  Email :
            </label>
              <input type="email"
              id="email"
              className="mt-2 block p-3 bg-gray-50 w-full"
              placeholder="Tu email" name="email"
              />
          </div>
          
          <div className="mb-4">
            <label className="text-slate-400 font-bold" htmlFor="password">
                  Password :
            </label>
              <input type="password"
              id="password"
              className="mt-2 block p-3 bg-gray-50 w-full"
              placeholder="Tu Password" name="password"
              />
          </div>       
          <input type="submit" name="" id=""  value="Inciar Sesion" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3          
          uppercase font-bold rounded-sm"/>
          </form> 
    </div>
    <nav className="mt-5">
      <Link to="/auth/registro" className="text-indigo-700">
          No tienes cuenta? Crea una 
      </Link>
    </nav>
  </div>
  )
}
