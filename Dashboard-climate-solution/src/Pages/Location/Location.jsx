import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


// Fix default marker icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Location = () => {
    const locations = [
        { id: 1, name: 'Sensor A', position: [51.505, -0.09] },
        { id: 2, name: 'Sensor B', position: [51.51, -0.1] },
        { id: 3, name: 'Sensor C', position: [51.515, -0.12] },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Locations</h1>
            <div className="h-[500px] w-full rounded-lg overflow-hidden shadow">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className="h-full w-full">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
                    />
                    {locations.map((loc) => (
                        <Marker key={loc.id} position={loc.position}>
                            <Popup>{loc.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Location;
