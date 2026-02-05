import { useParams } from "react-router";
import type CineCreacion from "../modelos/CinceCreacion.model";
import { useEffect, useState } from "react";
import {type SubmitHandler } from "react-hook-form";
import FormularioCine from "./FormularioCine";

export default function EditarCine() {

  const {id} = useParams();
  const [modelo, setModelo] = useState<CineCreacion | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setModelo({ nombre: 'Hoyts Coto Temperley', latitud: -34.783355625254124, longitud: -58.40613239213632});
    }, 1000);
  }, [id]);

  
    const onSubmit: SubmitHandler<CineCreacion> = async (data) => {
      console.log("editar el cine...");
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(data);
    }


  return (
    <>
      <h3>Editar Cine</h3>
      {modelo ? <FormularioCine modelo={modelo} onSubmit={onSubmit} /> : <div>Cargando...</div>}
    </>
  )
}