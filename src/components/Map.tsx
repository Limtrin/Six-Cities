import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import * as leaflet from "leaflet";

const PinIcons = {
  pin: leaflet.icon({
    iconUrl: `/img/pin.svg`,
    iconSize: [30, 45]
  }),
  pinActive: leaflet.icon({
    iconUrl: `/img/pin-active.svg`,
    iconSize: [30, 45]
  })
};  

interface Props {
  coordinates: number[][],
  zoom: number,
  center?: number[],
  focusCityLocation: number[],
}

const Map: React.FunctionComponent<Props> = (props: Props) => {
  const center = props.center ? props.center : props.coordinates[0];

  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      marker: true,
      scrollWheelZoom: false,
      zoom: props.zoom,
      center: center,
      layers: [
        leaflet
          .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }),
      ]
    });

    return () => {
      mapRef.current.remove();
    }
  },[center]);

  const coordsRef = useRef([]);
  useEffect(() => {
    if (coordsRef.current.length > 0) {
      coordsRef.current.map((pinElement) => {
        pinElement.remove();
      });
      coordsRef.current = [];
    }
    props.coordinates.forEach((offerCoords) => {
      const isActive = offerCoords.every((coordinate, index) => coordinate === props.focusCityLocation[index]);
      const pinElement = leaflet
        .marker(offerCoords, {icon: isActive ? PinIcons.pinActive : PinIcons.pin})
        .addTo(mapRef.current);
      coordsRef.current.push(pinElement);
    });
  },[props.coordinates, props.focusCityLocation]);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

const mapStateToProps = (state) => ({
  focusCityLocation: state.focusCityLocation,
});

export default connect(mapStateToProps)(Map);
