import React, { Component } from "react";
import "./Dashboard.css";
import BarChart from "./BarChart.js";
 

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
 
  render() {
    return (
      <BarChart
          color="#70CAD1"
        />
      <div>
        

        <h1>testing functionality</h1>
      </div>  
    );
  }
}


