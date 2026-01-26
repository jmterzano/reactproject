import { useParams } from "react-router";

export default function EditarActor() {

  const {id} = useParams();

  return (
    <>
      <h3>Editar Actor</h3>
      <p>Id del actor: {id}</p>
   </> 
  )
}