import React from 'react';
import { Marker, TileLayer, MapContainer, MapContainerProps } from 'react-leaflet';
import { Icon } from 'leaflet';

type MapChartProps = {
  lat: number;
  lng: number;
};
export const MapChart: React.FC<MapChartProps> = (props) => {
  const position: MapContainerProps['center'] = {
    lat: props.lat,
    lng: props.lng,
  };
  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={false} zoomControl={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: 'assets/marker.webp',
            iconSize: [44, 48],
            iconAnchor: [22, 48],
          })
        }
      />
    </MapContainer>
  );
};
