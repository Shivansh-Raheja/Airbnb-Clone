import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport,setViewport]=useState({
       width:'100%',
       height:'100%',
       longitude:-122.4376,
       latitude:37.7577,
       zoom:11
  });
  return (
    <ReactMapGL 
  mapStyle='mapbox://styles/shivansh-5687/cl2y9ttqt000415mqi74eg9kb'
  mapboxApiAccessToken={process.env.mapbox_key} 
  {...viewport} >

  </ReactMapGL>
  );
}

export default Map