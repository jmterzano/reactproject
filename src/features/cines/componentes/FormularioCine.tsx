import { useForm, type SubmitHandler } from "react-hook-form";
import type CineCreacion from "../modelos/CinceCreacion.model";
import { yupResolver } from "@hookform/resolvers/yup";
import { primeraLetraMayuscula } from "../../../validaciones/Validaciones";
import * as yup from "yup";
import Boton from "../../../componentes/Boton";
import { NavLink } from "react-router";
import Mapa from "../../actores/componentes/Mapa/Mapa";
import type Coordenada from "../../actores/componentes/Mapa/Cordenada.model";

export default function FormularioCine(props: FormularioCineProps) {  

    const {register, handleSubmit,
        setValue,
        formState: {errors, isValid, isSubmitting}} = useForm<CineCreacion>({
        resolver: yupResolver(regalasDeValidacion),
        mode: 'onChange',
        defaultValues: props.modelo ?? { nombre: '' }
    })

    function transformarCoordenadas(): Coordenada[] | undefined {
       if(props.modelo){
        const respuesta: Coordenada = {
            lat: props.modelo.latitud,
            lng: props.modelo.longitud 
        }
        return [respuesta];
      }  
    return undefined;
  }

    return(
        <>
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" className="form-control" 
                {...register("nombre")} />
                {errors.nombre && <p className="error">{errors.nombre.message}</p>}
            </div> 

            <div className="mt-4">
                <Mapa coordenadas={transformarCoordenadas()}
                lugarSeleccionado={coordenada => {
                 setValue('latitud', coordenada.lat, {
                    shouldValidate: true
                 });

                 setValue('longitud', coordenada.lng, {
                    shouldValidate: true
                 })
                 }} />
            </div>



            <div className="mt-2">
                <Boton type="submit" disabled={!isValid|| isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </Boton>
                <NavLink to="/cines" className="btn btn-secondary ms-2">Cancelar</NavLink>
            </div>
           </form>  
        </>
    )

}


interface FormularioCineProps {
    modelo?: CineCreacion;
    onSubmit: SubmitHandler<CineCreacion>;
}

const regalasDeValidacion = yup.object({
    nombre: yup.string().required('El nombre es obligatorio')
    .test(primeraLetraMayuscula()),
    latitud: yup.number().required(),
    longitud: yup.number().required()
});