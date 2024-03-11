import { categorias } from "../data/categorias";
import useQuiosco from "../hooks/useQuiosco";

export default function Categoria({categoria}) {
    const  {handleClickCategoria,categoriaActual}=useQuiosco();
    const {icono, id , nombre}=categoria;
    const resaltarCategoria = ()=> categoriaActual.id === id ? 'bg-amber-400' : 'bg-white';
  return (
    <div className={`${resaltarCategoria() } flex items-center gap-4 border  w-full p-3 hover:bg-amber-400 cursor-pointer`}>
        {/* agregamos la imagen desde react */}
        <img src={`/img/icono_${icono}.svg`} alt="imagen-icono" className="w-12"/>
        {/* Para hacer la busqueda de categoria cambuamoa de  */}     
        <button className="text-lg cursor-pointer font-bold" type="button" 
        onClick={()=> handleClickCategoria(id)}
        >
          {/* agregamos el evento para que traiga el numero de la categoria */}
            {nombre}
        </button>
    </div>
  )
}
