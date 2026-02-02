import type { SubmitHandler } from "react-hook-form";
import type ActorCreacion from "../modelos/ActorCreacion.models";
import FormularioActor from "./FormularioActor";


const onSubmit: SubmitHandler<ActorCreacion> = async (data) => {
  console.log("Creando actor...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(data);
}

export default function CrearActor() {
  return (
    <>
      <h3>Crear Actor</h3>
      <FormularioActor onSubmit={onSubmit} />
    </>
  )
}