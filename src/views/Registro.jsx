export default function Registro() {
  return (
    /**Retornar nuestras varibles con un div */
    <>
      <h1 className="text-4xl font-bold">Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
          <form action="" noValidate>
            <div className="mb-4">
              <label className="text-slate-400 font-bold" htmlFor="name">
                    Nombre :
              </label>
                <input type="text"
                id="name"
                className="mt-2 block p-3 bg-gray-50 w-full"
                placeholder="Tu nombre" name="name"
                />
            </div>
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

            <div className="mb-4">
              {/* Password_confirmation para la validacion del password con laravel */}
              <label className="text-slate-400 font-bold" htmlFor="password_confirmation">
                   Repetir  Password :
              </label>
                <input type="password"
                id="password_confirmation"
                className="mt-2 block p-3 bg-gray-50 w-full"
                placeholder="Repetir Password" name="password_confirmation"
                />
            </div>
            <input type="submit" name="" id=""  value="Crear cuenta" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
            
            uppercase font-bold rounded-sm"/>
            </form> 
      </div>
    </>
   
  )
}
