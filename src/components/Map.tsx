/** @format */

"use client";

import { LatLngExpression, LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
}

const defaults = {
  zoom: 14,
};

export default function Map(Map: MapProps) {
  const { zoom = defaults.zoom, posix } = Map;

  return (
    <div className="h-[75vh] w-[90vw] mx-auto ml-10 flex">
      <MapContainer
        center={posix}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ border: "4px solid", borderRadius: "4rem" }}
        className="h-full w-full border-2 "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.50987, -73.610801]}>
          <Popup>Hey ! you found me</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
