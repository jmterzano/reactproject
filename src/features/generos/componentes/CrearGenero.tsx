import { type SubmitHandler } from "react-hook-form";
import FormularioGenero from "./FormularioGenero";
import type GeneroCreacion from "../modelos/GeneroCreacion.model";
import clienteAPI from "../../../api/clienteAxios";
import { useNavigate } from "react-router";



export default function CrearGenero() {

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<GeneroCreacion> = async(data) => {

    try {
       await clienteAPI.post('/generos', data); 
       navigate('/generos')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
     <h3>Crear Genero</h3>
     <FormularioGenero onSubmit={onSubmit} />
    </>
  );
}

