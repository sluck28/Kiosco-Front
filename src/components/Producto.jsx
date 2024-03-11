import { FormatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
export default function Producto({producto}) {
    /**Parte para crear logica del sistema */
    const {nombre,precio,imagen}=producto;    
    const {handleClickModal}=useQuiosco;
  return (
    <div className="border p-3 shadow bg-white">
        <img src={`/img/${imagen}.jpg`} alt={`imagen ${nombre}`}  className="w-full"/>

        <div className="p-5">
            <h3 className="text-2xl font-bold text-center">
                {nombre}
            </h3>

            <p className="text-center mt-5 font-black text-4xl text-amber-500">
                 {FormatearDinero(precio)}   
            </p>

            <button type="button" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 
            uppercase font-bold rounded-md"
            
            >
                Agregar
            </button>
        </div>
    </div>
  )

  
}
