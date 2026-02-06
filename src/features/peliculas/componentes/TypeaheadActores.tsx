import { Typeahead } from "react-bootstrap-typeahead";
import type { Option } from "react-bootstrap-typeahead/types/types";
import type ActorPelicula from "../modelos/ActorPelicula";

export default function TypeheadActores(props: TypeheadActoresProps){

const actores: ActorPelicula[] = [{
    id: 1, nombre:'Tom Holland',personaje:'',foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/330px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'
},
{
    id: 2, nombre:'Jim Carrey',personaje:'',foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jim_Carrey_2008.jpg/500px-Jim_Carrey_2008.jpg'
},
{
    id: 3, nombre:'Zendeya',personaje:'',foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/330px-Zendaya_-_2019_by_Glenn_Francis.jpg'
}]

    const seleccion: ActorPelicula[] = [];

    return ( 
    <>   
        <label>Actores</label>
        <Typeahead
        id="typeahead"
        onChange={(actores: Option[]) => {
            const actorSeleccionado = actores[0] as ActorPelicula;
            if(props.actores.findIndex(x => x.id === actorSeleccionado.id) === -1){
                props.onAdd([...props.actores,actorSeleccionado]);
            }

        }}

         options={actores}
         labelKey={(opcion: Option) => {
            const actor = opcion as ActorPelicula;
            return actor.nombre
         }}

         filterBy={['nombre']}
         placeholder="Escriba el nombre del actor..."
         minLength={2}
         flip={true}
         selected={seleccion}
         renderMenuItemChildren={(opcion: Option) => {
            const actor = opcion as ActorPelicula;
            return (
                <>
                <img alt="imagen actor" src={actor.foto}
                style={{
                    height:'64px',
                    width:'64px',
                    marginRight:'10px'
                }} />
                <span>{actor.nombre}</span>
                </>
            )
         }} 
         />
         <ul className="list-group">
            {props.actores.map(actor => (
                <li
                className="list-group-item d-flex align-items-center"
                key={actor.id}
                >
                  <div style={{width:'70px'}}>
                    <img style={{height:'60px'}}
                    src={actor.foto}
                    alt="foto"
                     />
                  </div>
                  <div style={{width: '150px', marginLeft:'1rem'}}>
                        {actor.nombre}
                  </div>
                  <div className="flex-grow-1 mx-3">
                    <input className="form-control"
                    placeholder="Personaje" type="text" value={actor.personaje}
                    onChange={e => {

                    }} />

                  </div>
             </li>
            ))}
         </ul>
      </>
    )
}

interface TypeheadActoresProps{
    actores: ActorPelicula[];
    onAdd(actores: ActorPelicula[]):void
}