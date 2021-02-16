import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { loadCss, loadModules } from "esri-loader";
import { esriCSS, esriOptions } from "./config";
import polyu_logo from "./assets/polyu_logo.png";
import NavBar from "./components/NavBar.js";
import { WebMap, WebScene } from "@esri/react-arcgis";
import Dashboard  from './pages/Dashboard.js'

import "./App.css";
import Testing from "./pages/Testing";

loadCss(esriCSS);

export default class App extends Component {
  componentDidMount = () => {
    loadModules(["esri/Map", "esri/views/MapView"], esriOptions)
      .then(([Map, MapView]) => {
        const map = new Map({
          basemap: "gray-vector",
        });

        const view = new MapView({
          map: map,
          container: "mapContainer",
          basemap: "gray-vector",
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
        <Router>
          <Switch>
          <Route path="/dashboard" component={Testing}/>  
          </Switch>
        </Router>
        <Router>
          <Switch>
          <Route exact path="/" />
          <Route path="/dashboard" component={Dashboard}/>
            <Route exact path="/home">
              <WebMap id="6627e1dd5f594160ac60f9dfc411673f" />
            </Route>
            
          </Switch>
        </Router>
      </>
    );
  }
}
