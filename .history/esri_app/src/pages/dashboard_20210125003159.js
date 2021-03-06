import React, {Component} from 'react';
import 'dashboard.css'

export default class  extends Component {

  componentDidMount = () => {
    loadModules([
      'esri/Map',
      'esri/views/MapView'
    ], esriOptions)
      .then(([Map, MapView]) => {

        const map = new Map({
          basemap: 'gray-vector'
        });

        const view = new MapView({
          map: map,
          container: 'mapContainer',
          basemap: 'gray-vector',
          center: [-100, 30],
          zoom: 5
        });

      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Ching Yi Web Map</h1>
        </div>
        <div>
          <h1></h1>
        </div>
        <div id="mapContainer"/>
      </div>
    );
  }
}
