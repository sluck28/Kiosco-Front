
import Categoria from "./Categoria";

export default function sidebar() {
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" alt="logo" className="w-40" />
      </div>

      <div className="mt-10">

        {categorias.map((categoria) => (
          <Categoria 
          categoria={categoria}
          key={categoria.id} 
          /**En un arreglo de js debemos de agregar el id  */
          />
        ))}
      </div>

      <div className="my-5 py-5">
          <button
          type="button" className="bg-red-500 text-center p-5 font-bold w-full text-white truncate rounded-md hover:bg-red-900">
             Cancelar
          </button>
      </div>
    </aside>
  );
}
