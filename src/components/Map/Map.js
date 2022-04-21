import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'

import classes from './Map.module.css'
const Map = (props) => {
    return (
        <MapContainer center={props.position} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.position}>
                <Popup>
                    {props.popup}
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;