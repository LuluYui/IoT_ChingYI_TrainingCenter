import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { loadCss, loadModules } from "esri-loader";
import { esriCSS, esriOptions } from "./config";
import polyu_logo from "./assets/polyu_logo.png";
import NavBar from "./components/NavBar.js";
import { WebMap, WebScene, Scene } from "@esri/react-arcgis";
import Dashboard from "./pages/Dashboard.js";

import "./App.css";
import Testing from "./pages/Testing.js";

loadCss(esriCSS);

export default class App extends Component {

  componentDidMount = () => {
    
    loadModules(["esri/Scene", "esri/views/SceneView"], esriOptions)
    .then(([Scene, SceneView]) => {
      const scene = new Scene({
        basemap: "gray-vector",
      });

      const view = new SceneView({
        map: scene,
        container: "viewDiv",
        basemap: "hybird",
        center: [-100, 30],
        zoom: 5,
      });
    })
    .catch((err) => {
      console.error(err);
    });


    loadModules(["esri/Map", "esri/views/MapView"], esriOptions)
      .then(([Map, MapView]) => {

        const map = new Map({
          basemap: "gray-vector",
        });

        const view = new MapView({
          map: map,
          container: "mapContainer",
          basemap: "hybird",
          center: [-100, 30],
          zoom: 5,
        });
      })
      .catch((err) => {
        console.error(err);
      });


  };

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" />

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/home">
            <div style={{ width: '100vw', height: '100vh'}}>
            <WebMap id="1cb2296797044743867503c52e8f40e4" />
            </div>
          </Route>

          <Route exact path="/webscene">
            <WebScene id="dafa1f5e1950427b91102fb2da4570f8" />
          </Route>
  
        </Switch>
      </>
    );
  }
}
