import React from 'react';
import { Scene } from '@esri/react-arcgis';

export default (props) => (
    <Scene
        style={{ width: '100vw', height: '100vh' }}
        mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
            center: [-122.4443, 47.2529],
            zoom: 6
        }}
    />
)