import * as React from 'react';
import { Map, Marker } from 'react-kakao-maps';

const options = {
  map: {
    center: new daum.maps.LatLng(
      37.3418931,
      126.8315179,
    ),
    draggable: true,
    scrollwheel: true,
  },
  marker: {
    position: new daum.maps.LatLng(
      37.3418931,
      126.8315179,
    ),
  },
};

export const MapToDimigo: React.FC = () => (
  <Map
    options={options.map}
  >
    <Marker
      options={options.marker}
    />
  </Map>
);

export default MapToDimigo;
