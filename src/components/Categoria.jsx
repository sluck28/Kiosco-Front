import { categorias } from "../data/categorias";

export default function Categoria({categoria}) {

    const {icono, id , nombre}=categoria
  return (
    <div className="flex items-center gap-4 border  w-full p-3 hover:bg-amber-400 cursor-pointer">
        {/* agregamos la imagen desde react */}
        <img src={`/img/icono_${icono}.svg`} alt="imagen-icono" className="w-12"/>
        <p className="text-lg cursor-pointer font-bold">{nombre}</p>
    </div>
  )
}
