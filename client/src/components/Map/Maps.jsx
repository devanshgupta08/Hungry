import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:"AIzaSyDkTuCGpx-NsXGcyqHXHOriF21qcCF4fX0",
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const markers = [
    [
        "B",
        "WATER PARK",
        25.04756186859711,
        75.82903849647712
    ],
    [
        "A",
        "IIIT KOTA",
        25.050030688239502,
        75.82734334044619
    ]
  ];

  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div style={{ marginTop: "50px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "600px",
        //   width:"600px"
        }}
        center={{ lat: 25.050030688239502, lng: 75.82734334044619 }} // Set your default center here
        zoom={16}
        onLoad={onMapLoad}
      >
        {markers.map((markerData, index) => (
          <MarkerF
            key={index}
            position={{ lat: markerData[2], lng: markerData[3] }}
            icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} 
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
