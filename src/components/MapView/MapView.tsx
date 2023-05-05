import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "./MapView.module.css";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import Markers from "../Markers/Markers";
import { useState } from "react";
import LocationMarker from "../LocationMarker/LocationMarker";

const MapView = () => {
  const defaultCoordinates: LatLngExpression | undefined = [
    41.47941365811902, 1.6078536441824793,
  ];

  return (
    <MapContainer center={defaultCoordinates} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapView;
