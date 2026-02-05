import FormularioCine from "./FormularioCine";
import type CineCreacion from "../modelos/CinceCreacion.model";
import type { SubmitHandler } from "react-hook-form";

export default function CrearCine() {

  const onSubmit: SubmitHandler<CineCreacion> = async (data) => {
    console.log("Creando cine...");
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
  }


  return (
    <div>
      <h3>Crear Cine</h3>
      <FormularioCine onSubmit={onSubmit} />

    </div>
  )
}