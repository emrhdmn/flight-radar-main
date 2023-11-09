import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import L from "leaflet";
import icon from "./../../public/plane-i.png";
const MapView = ({ openModal }) => {
  const store = useSelector((store) => store);
  // console.log(store.flight);

  const planeIcon = L.icon({
    iconUrl: icon,
    iconSize: [20, 20],
  });
  return (
    <div className="leaflet-container">
      <MapContainer
        center={[39.950301, 32.802545]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {store.flight.map((item) => (
          <Marker
            icon={planeIcon}
            key={item.id}
            position={[item.lat, item.lng]}
          >
            <Popup>
              <div className="popup">
                <span>Kodu:{item.code}</span>
                <button
                  onClick={() => {
                    // console.log("mapid", item.id);
                    openModal(item.id);
                  }}
                >
                  Detay
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
