import { productos } from "../data/productos";
import {  } from "module";
export default function inicio() {
  return (
    <>
      <h1 className="text-4xl font-black">Inicio</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido</p>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {productos.map(producto=>(

              p
            ))}
        </div>

    </>
  );
}
