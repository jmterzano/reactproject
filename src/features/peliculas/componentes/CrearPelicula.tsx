import type { SubmitHandler } from "react-hook-form";
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type Genero from "../../generos/modelos/Genero.model";
import type Cine from "../../cines/modelos/Cine.models";

export default function CrearPelicula() {


  const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
    console.log("crear pelicula...");
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(data);
  }

    const generosSeleccionados: Genero[] = [];
    const generosNoSeleccionados: Genero[] = [{id: 1, nombre: 'Acción'}, {id: 2,nombre:'Drama'},{id: 3, nombre:'Comedia'}]

    const cinesSeleccionados:Cine[] = [];
    const cinesNoSeleccionados: Cine[] = [
      {id: 1, nombre:'Ahora', latitud: 0, longitud: 0},
      {id: 2, nombre:'Sambil', latitud: 0, longitud: 0},
    ];

  return (
      <>
        <h3>Crear Pelicula</h3>
        <FormularioPelicula onSubmit={onSubmit} generosNoSeleccionados={generosNoSeleccionados}
        generosSeleccionados={generosSeleccionados}
        cinesSeleccionados={cinesSeleccionados} cinesNoSeleccionados={cinesNoSeleccionados}
        />
      </>


  )
}