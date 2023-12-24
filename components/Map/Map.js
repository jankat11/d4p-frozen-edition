import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <section className="mb-1">
      <MapContainer
        className="map"
        center={[41.1034, 29.05141]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.1034, 29.05141]}>
          <Popup>design4theplanet</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};
export default Map;
