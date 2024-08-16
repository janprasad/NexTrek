import React from "react";
import '../App'
import './Map.css'
//API Key: "AIzaSyBBVbwbI2pSfLc59nwpv8YmZ-ogU7Uyees"
import { useState } from "react";

import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};


const initialCenter = {
  lat: 37.658428,
  lng: -121.876999
};

const initialZoom = 10;

const locations = [
  {
    id: 1,
    lat: 37.687510,
    lng: -121.881590,
    title: 'Arroyo Mocho Trail',
    icon: 'https://lh3.googleusercontent.com/p/AF1QipM_MJgXHp76MGcpUIvSsnrdu7_m_lvJMF11px3L=s1360-w1360-h1020',
    miles: '17.2'
  },
  {
    id: 2,
    lat: 37.658430,
    lng: -121.876,
    title: 'omg'
  }
]


function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBBVbwbI2pSfLc59nwpv8YmZ-ogU7Uyees"
  })

  const [map, setMap] = React.useState(null)
  //const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(initialCenter);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const mapOptions = {
    streetViewControl: false, // Disable Pegman
    mapTypeControl: false
   // fullscreenControl: false, // Optional: Disable fullscreen control
  };

  // function MarkerClicked(event){
  //   setIsInfoWindowOpen(true);
  // }

  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={initialCenter}
        zoom={initialZoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
      >    
      {locations.map((location) =>(
        <MarkerF
          key={location.id}
          position={{lat: location.lat, lng: location.lng}}
          onClick={() => setSelectedMarker(location)}/>
      ))}  
      {selectedMarker && (
        <InfoWindowF
        position={{lat:selectedMarker.lat, lng: selectedMarker.lng}}
        onCloseClick={() => setSelectedMarker(null)}>
        <div className="w-80 p-2">
          <div className="flex items-center mb-2 space-x-5">
            <img src={selectedMarker.icon}
                  className="w-14 h-14 rounded-full"/>
            <div>
              <h3 className="text-x1 font-bold">{selectedMarker.title}</h3>
              <p>Total miles: {selectedMarker.miles}</p>
            </div>
          </div>
        </div>
        </InfoWindowF>
      )}


        {/* {
          points.map((point, i)=>(
            <MarkerF 
              position={point} 
              onClick={MarkerClicked}>
              {isInfoWindowOpen && (
                <InfoWindowF position={point} 
                onCloseClick={()=>setIsInfoWindowOpen(false)}>
                  <div>
                    <h3>Some title</h3>
                  </div>
                </InfoWindowF>
              )}
                
            </MarkerF>
          ))
        } */}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)

// import { useState } from "react";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

// export default function Intro() {
//   const position = { lat: 37.658428, lng: -121.876999 };
//   const [open, setOpen] = useState(false);


//   return (
//     <APIProvider apiKey="AIzaSyBBVbwbI2pSfLc59nwpv8YmZ-ogU7Uyees">
//       <div style={{ height: "100vh", width: "100%" }}>
//         <Map zoom={9} center={position}>
//         </Map>
//       </div>
//     </APIProvider>
//   );
// }