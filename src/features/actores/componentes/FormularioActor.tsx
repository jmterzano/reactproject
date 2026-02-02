import { useForm, type SubmitHandler } from "react-hook-form";
import type ActorCreacion from "../modelos/ActorCreacion.models";
import Boton from "../../../componentes/Boton";
import { NavLink } from "react-router";
import * as yup from "yup";
import { fechaNoPuedeSerFutura, primeraLetraMayuscula } from "../../../validaciones/Validaciones";
import { yupResolver } from "@hookform/resolvers/yup";
import SeleccionarImagen from "../../../componentes/SeleccionarImagen";

export default function FormularioActor(props: FormularioActorProps) {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid, isSubmitting }
    } = useForm<ActorCreacion>({
        resolver: yupResolver(regalasDeValidacion),
        mode: 'onChange',
        defaultValues: props.modelo ?? { nombre: ''}
    });

    const imagenActualURL: string | undefined = props.modelo?.foto ? props.modelo.foto as string : undefined;

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" autoCapitalize="off" className="form-control" {...register("nombre")} />
                {errors.nombre && <p className="error">{errors.nombre.message}</p>}
            </div>

              <div className="form-group">
                <label htmlFor="fechaNacimiento">Fecha Nacimiento:</label>
                <input type="date" id="fechaNacimiento" autoCapitalize="off" className="form-control" {...register("fechaNacimiento")} />
                {errors.fechaNacimiento && <p className="error">{errors.fechaNacimiento.message}</p>}
            </div>

            <SeleccionarImagen label="Foto" imagenURL={imagenActualURL} imagenSeleccionada={foto => setValue("foto", foto)} />

            <div className="mt-2">
                <Boton type="submit" disabled={isSubmitting || !isValid}>
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </Boton>
                <NavLink className="btn btn-secondary ms-2" to="/actores">Cancelar</NavLink>
            </div>



        </form>
    )
}


interface FormularioActorProps {

    modelo?: ActorCreacion;
    onSubmit: SubmitHandler<ActorCreacion>;

}

const regalasDeValidacion = yup.object({
    nombre: yup.string().required('El nombre es obligatorio').test(primeraLetraMayuscula()),
    fechaNacimiento: yup.string().required('La fecha de nacimiento es obligatoria').test(fechaNoPuedeSerFutura())
});
