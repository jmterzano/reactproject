export default function MostrarErrores(props: MostrarErroresProps) {   
    return (
        <>
          <ul className="error">
            {props.errores.map((error, index) => <li key={index}>{error}</li>)}
          </ul>
        </>
    )
} 

interface MostrarErroresProps {
    errores: string[];
}