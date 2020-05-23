import * as React from "react";
import { useEffect } from "react";
import * as leaflet from "leaflet";

const icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});

interface Props {
  coordinates: number[][],
  zoom: number,
  center?: number[],
} 

const Map: React.FunctionComponent<Props> = (props: Props) => {

  let map = null;
  const center = props.center ? props.center : props.coordinates[0];

  useEffect(() => {
    if (!map) {
      renderMap(center, props.zoom);
    }

    renderMarkers(props.coordinates);

    return () => {
      map.remove();
    };
  });

  const renderMap = (centerCoordinates, zoom) => {
    map = leaflet.map(`map`, {
      center: centerCoordinates,
      zoom: zoom,
      marker: true,
      scrollWheelZoom: false
    });

    map.setView(centerCoordinates, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
  }

  const renderMarkers = (offersCoords) => {
    offersCoords.forEach((offerCoords) => {
      leaflet
        .marker(offerCoords, {icon})
        .addTo(map);
    });
  }

  return (
    <div id="map" style={{height: `100%`}} ></div>
  );
};

export default Map;
