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
        { id: 1, name: 'Dhaka, Bangladesh - 1,200 sensors', position: [23.8103, 90.4125] },
        { id: 2, name: 'Rome, Italy - 800 sensors', position: [41.9028, 12.4964] },
        { id: 3, name: 'New York, USA - 3,000 sensors', position: [40.7128, -74.0060] },
        { id: 4, name: 'Nairobi, Kenya - 600 sensors', position: [-1.2921, 36.8219] },
        { id: 5, name: 'São Paulo, Brazil - 1,100 sensors', position: [-23.5505, -46.6333] },
        { id: 6, name: 'New Delhi, India - 2,500 sensors', position: [28.6139, 77.2090] },
        { id: 7, name: 'Beijing, China - 4,200 sensors', position: [39.9042, 116.4074] },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Global Sensor Locations</h1>
            <div className="h-[500px] w-full rounded-lg overflow-hidden shadow">
                <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} className="h-full w-full">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
                    />
                    {locations.map((loc) => (
                        <Marker key={loc.id} position={loc.position}>
                            <Popup>
                                <strong>{loc.name}</strong>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            {/* Global Deployment Info */}
            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Global Sensor Deployment</h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            country: "Bangladesh",
                            location: "Dhaka",
                            sensors: ["Temperature", "Humidity", "Air Quality", "Water Level"],
                            deployed: "2025-01-10",
                            info: "Urban monitoring for pollution and energy usage"
                        },
                        {
                            country: "Italy",
                            location: "Rome",
                            sensors: ["Temperature", "Air Quality", "CO₂", "Humidity"],
                            deployed: "2025-02-15",
                            info: "Air quality tracking for city planning"
                        },
                        {
                            country: "USA",
                            location: "New York",
                            sensors: ["Temperature", "Humidity", "Water Level", "Air Quality"],
                            deployed: "2025-03-05",
                            info: "Building energy and environmental monitoring"
                        },
                        {
                            country: "Kenya",
                            location: "Nairobi",
                            sensors: ["Temperature", "Humidity", "Air Quality", "CO₂"],
                            deployed: "2025-01-20",
                            info: "Rural and urban pollution monitoring"
                        },
                        // Add up to 30 items similarly...
                    ].map((deployment, idx) => (
                        <div key={idx} className="bg-white shadow rounded-xl p-4 flex flex-col">
                            <h3 className="text-lg font-semibold mb-2">{deployment.country} - {deployment.location}</h3>
                            <p className="text-gray-600 mb-1"><strong>Sensors:</strong> {deployment.sensors.join(", ")}</p>
                            <p className="text-gray-600 mb-1"><strong>Deployment Date:</strong> {deployment.deployed}</p>
                            <p className="text-gray-600"><strong>Info:</strong> {deployment.info}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Location;
