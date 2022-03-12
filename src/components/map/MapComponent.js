
import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import "./index.css"

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapComponent = (show) => {
  const [position, setPosition] = useState({ coordinates: [	8.672434, 49.398750], zoom: 14 });

  function handleZoomIn() {
    if (position.zoom >= 14) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  return (
        <div className="rootMap">
            <div className="controls">
                <button onClick={handleZoomIn}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                    >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
                <button onClick={handleZoomOut}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                >
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                </button>
            </div>
            <ComposableMap>
                <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                onMoveEnd={handleMoveEnd}
                >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map(geo => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                    }
                </Geographies>
                <Marker coordinates={[-101, 53]} fill="#777">
                        <text textAnchor="middle" fill="#FF9600">
                        Canada
                        </text>
                    </Marker>
                    <Marker coordinates={[-102, 38]} fill="#FF9600">
                        <text textAnchor="middle" fill="#FF9600">
                        USA
                        </text>
                    </Marker>
                    <Marker coordinates={[-103, 25]} fill="#FF9600">
                        <text textAnchor="middle" fill="#FF9600">
                        Mexico
                        </text>
                    </Marker>
                    <Marker coordinates={[10.451526, 51.165691]} fill="#FF9600">
                        <text fontSize={3} textAnchor="middle" fill="#FF9600">
                        Germany
                        </text>
                    </Marker>
                    <Marker coordinates={[	8.672434, 	49.398750]}>
                        <circle r={0.7} fill="#F53" />
                    </Marker>
                    <Marker coordinates={[	9.2, 49.3]}>
                        <text fontSize={1.3}   textAnchor="start" fill="#FFE300 ">
                        Heidelberg
                        </text>
                    </Marker>
                    <Marker coordinates={[	2.213749, 46.227638]} fill="#FF9600">
                        <text fontSize={3} textAnchor="middle" fill="#FF9600">
                        France
                        </text>
                    </Marker>
                    <Marker coordinates={[	-3.435973, 55.378051]} fill="#FF9600">
                        <text fontSize={2} textAnchor="middle" fill="#FF9600">
                        UK
                        </text>
                    </Marker>
                    <Marker coordinates={[		5.291266, 	52.132633]} fill="#FF9600">
                        <text fontSize={0.7} textAnchor="middle" fill="#FF9600">
                        Netherlands
                        </text>
                    </Marker>
                    <Marker coordinates={[		4.469936, 50.503887]} fill="#FF9600">
                        <text fontSize={0.7} textAnchor="middle" fill="#FF9600">
                    Belgium
                        </text>
                    </Marker>

                    <Marker coordinates={[			19.145136, 	51.919438]} fill="#FF9600">
                        <text fontSize={3} textAnchor="middle" fill="#FF9600">
                    Poland
                        </text>
                    </Marker>
                    <Marker coordinates={[			15.472962, 		49.817492]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                    Czech Republic
                        </text>
                    </Marker>

                    <Marker coordinates={[			14.550072, 			47.516231]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                    Austria
                        </text>
                    </Marker>

                    <Marker coordinates={[				8.227512, 			46.818188]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                    Switzerland
                        </text>
                    </Marker>

                    <Marker coordinates={[			19.699024, 				48.669026]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                    Slovakia
                        </text>
                    </Marker>

                    <Marker coordinates={[			19.503304, 			47.162494]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                    Hungary
                        </text>
                    </Marker>

                    <Marker coordinates={[			14.995463, 				46.151241]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                    Slovenia
                        </text>
                    </Marker>

                    <Marker coordinates={[				15.2, 			45.1]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Croatia
                        </text>
                    </Marker>

                    <Marker coordinates={[				9.501785, 				56.26392]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Denmark
                        </text>
                    </Marker>

                    <Marker coordinates={[				12.56738, 				41.87194]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Italy
                        </text>
                    </Marker>

                    <Marker coordinates={[					23.881275, 					55.169438]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Lithuania
                        </text>
                    </Marker>

                    <Marker coordinates={[				24.603189, 					56.879635]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Latvia
                        </text>
                    </Marker>

                    <Marker coordinates={[					27.953389, 				53.709807]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Belarus
                        </text>
                    </Marker>

                    <Marker coordinates={[				31.16558, 					49.379433]} fill="#FF9600">
                        <text fontSize={2.7} textAnchor="middle" fill="#FF9600">
                        Glory To Ukraine
                        </text>
                    </Marker>

                    <Marker coordinates={[				28.369885, 					47.411631]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Moldova
                        </text>
                    </Marker>

                    <Marker coordinates={[				24.96676, 						45.943161]} fill="#FF9600">
                        <text fontSize={2} textAnchor="middle" fill="#FF9600">
                        Romania
                        </text>
                    </Marker>

                    <Marker coordinates={[					25.48583, 						42.733883]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Bulgaria
                        </text>
                    </Marker>

                    <Marker coordinates={[				21.005859, 					44.016521]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Serbia
                        </text>
                    </Marker>

                    <Marker coordinates={[				17.679076, 						43.915886]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Bosnia
                        </text>
                    </Marker>

                    <Marker coordinates={[				19.37439, 						42.708678]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Montenegro
                        </text>
                    </Marker>

                    <Marker coordinates={[					20.902977, 					42.602636]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Kosovo
                        </text>
                    </Marker>

                    <Marker coordinates={[					20.168331, 					41.153332]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Albania
                        </text>
                    </Marker>

                    <Marker coordinates={[				21.824312, 						39.074208]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Greece
                        </text>
                    </Marker>

                    <Marker coordinates={[				35.243322, 						38.963745]} fill="#FF9600">
                        <text fontSize={4} textAnchor="middle" fill="#FF9600">
                        Turkey
                        </text>
                    </Marker>

                    <Marker coordinates={[				33.429859, 							35.126413]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Cyprus
                        </text>
                    </Marker>

                    <Marker coordinates={[					45.038189, 						40.069099]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Armenia
                        </text>
                    </Marker>

                    <Marker coordinates={[				47.576927, 							40.143105]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Azerbaijan
                        </text>
                    </Marker>

                    <Marker coordinates={[				43.356892, 						42.315407]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Georgia
                        </text>
                    </Marker>

                    <Marker coordinates={[					8.468946, 						60.472024]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Norway
                        </text>
                    </Marker>

                    <Marker coordinates={[					25.748151, 							61.92411]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Finland
                        </text>
                    </Marker>

                    <Marker coordinates={[					15.643501, 						60.128161]} fill="#FF9600">
                    <text fontSize={1.5} textAnchor="end" fill="#FF9600">
                        Sweden
                        </text>
                    </Marker>
                    
                    <Marker coordinates={[				25.013607, 							58.595272]} fill="#FF9600">
                        <text fontSize={1} textAnchor="middle" fill="#FF9600">
                        Estonia
                        </text>
                    </Marker>

                    <Marker coordinates={[					85.318756, 							55.52401]} fill="#FF9600">
                        <text fontSize={24} textAnchor="middle" fill="#FF9600">
                        Fascist State of Pigs
                        </text>
                    </Marker>

                    <Marker coordinates={[	-7.8, 		53.41291]} fill="#FF9600">
                        <text fontSize={2} textAnchor="middle" fill="#FF9600">
                        Ireland
                        </text>
                    </Marker>

                    <Marker coordinates={[66.923684, 	48.019573]} fill="#FF9600">
                        <text fontSize={5} textAnchor="middle" fill="#FF9600">
                        Kazakhstan
                        </text>
                    </Marker>

                    <Marker coordinates={[	-3.74922, 		40.463667]} fill="#FF9600">
                        <text fontSize={5} textAnchor="middle" fill="#FF9600">
                        Spain
                        </text>
                    </Marker>
                </ZoomableGroup>
            </ComposableMap>
            
        </div>
  )
}

export default MapComponent






// import React, { useRef, useEffect, useState } from 'react';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import './index.css';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken = 'pk.eyJ1IjoianVzdG1hc3RlciIsImEiOiJjbDBhNG94cWUwMGtpM2lxbWlzc3hkdXd6In0.l8KWfioTP5LwO27_G1ozAQ';




// function MapComponent(props) {

    
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(44.799842834472656);
//     const [lat, setLat] = useState(41.6944496643259);
//     const [zoom, setZoom] = useState(12);


//     useEffect(() => {
//         console.log('check')
//         if (map.current) return; // initialize map only once
//         map.current = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: 'mapbox://styles/mapbox/light-v10',
//         center: [lng, lat],
//         zoom: zoom
//         });
//         });

//   return (
//         <div ref={mapContainer} className="map-container" />
//   )
// }

// export default MapComponent



