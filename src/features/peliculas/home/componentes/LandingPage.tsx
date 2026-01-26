import { useState, useEffect } from "react";
import ListadoPeliculas from "../../componentes/ListadoPeliculas";
import type Pelicula from "../../modelos/pelicula.model";

export default function LandingPage() {


 const [peliculas, setPeliculas] = useState<AppState>({});


     
    
      useEffect(() => {
        setTimeout(() => {
    
            const enCines : Pelicula[] = [{
        id: 1,
        titulo: "Sonic 3",
        poster: "https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg"
      },{
        id: 2,
        titulo: "Transformers: El despertar de las bestias",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Transformers-_Rise_of_the_Beasts.jpg"
      }];
    
      const proximosEstrenos : Pelicula[] = [{
        id: 3,
        titulo: "Suzume",
        poster: "https://upload.wikimedia.org/wikipedia/en/7/7f/Suzume_no_Tojimari_poster.jpg"
      }]
    
          setPeliculas({enCines, proximosEstrenos});      
        }, 1000);
      }, []);
      
return (
 <>
    <h3>En Cines</h3>
     <ListadoPeliculas peliculas={peliculas.enCines} />

     <h3>Proximos Estrenos</h3>
     <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
</>
  )
}

interface AppState {
  enCines?: Pelicula[];
  proximosEstrenos?: Pelicula[]; // opcional porque de principio es nulo
}
