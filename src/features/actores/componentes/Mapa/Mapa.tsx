import { MapContainer,Marker,Popup,TileLayer, useMapEvent} from "react-leaflet";
import { useState } from "react";
import type Coordenada from "./Cordenada.model";

export default function Mapa(props: MapaProps) {

  const [coordenadas, setCoordenadas] =  useState<Coordenada[] | undefined>(props.coordenadas);

  return (
   <MapContainer center={[-34.759512863722826, -58.403037499872006]} zoom={13}
     scrollWheelZoom={true} style={{height: '400px'}}>
    <TileLayer 
       attribution='React Peliculas'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />

       <ClickMapa setPunto={coordenada =>{
        setCoordenadas([coordenada]);
        if(props.lugarSeleccionado){
          props.lugarSeleccionado(coordenada);
        }
       }} />

        {coordenadas?.map(coordenada => <Marker key={coordenada.lat + coordenada.lng}
         position={[coordenada.lat, coordenada.lng]}
         >
            {coordenada.mensaje ? <Popup>{coordenada.mensaje}</Popup> : undefined}
          </Marker>)}

   </MapContainer>
  )
}

interface MapaProps{
  lugarSeleccionado?: (coordenada: Coordenada) => void;
  coordenadas?: Coordenada[];
}

function ClickMapa(props: ClickMapaProps){

  useMapEvent('click', e => {
    props.setPunto({lat: e.latlng.lat, lng: e.latlng.lng})
  })
  
  return null;
}

interface ClickMapaProps {
  setPunto: (coordenada: Coordenada) => void;
}