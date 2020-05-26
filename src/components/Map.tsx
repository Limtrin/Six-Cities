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

  const markerRef = useRef(null);
  useEffect(() => {
    markerRef.current = props.coordinates;
    markerRef.current.forEach((offerCoords) => {
      const {pin, pinActive} = PinIcons;
      const icon = offerCoords.every((offerCoord, index)=> offerCoord === props.focusCityLocation[index]) ? pinActive : pin;

      leaflet
        .marker(offerCoords, {icon})
        .addTo(mapRef.current);
    })
  },[props.coordinates, props.focusCityLocation]);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

const mapStateToProps = (state) => ({
  focusCityLocation: state.focusCityLocation,
});

export default connect(mapStateToProps)(Map);
