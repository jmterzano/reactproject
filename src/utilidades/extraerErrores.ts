import type { AxiosError } from "axios";

export function extraerErrores(obj: AxiosError): string[] {
    const data = obj.response?.data as RespuestaError;

    const err = data.errores;
    let mensajeDeErrores: string[] = [];

    for (const campo in err) {
        const mensajesConCampo = err[campo].map(mensaje => `${campo}: ${mensaje}`);
        mensajeDeErrores = mensajeDeErrores.concat(mensajesConCampo);
    }

    return mensajeDeErrores;
}

interface RespuestaError {
   errores: {
    [campo: string]: string[];
   }
}