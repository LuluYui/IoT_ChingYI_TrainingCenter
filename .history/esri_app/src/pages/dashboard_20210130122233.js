import React, { Component } from "react";
import "./Dashboard.css";
import BarChart from "./BarChart.js";
import { managerData, yearLabels } from "./mockData";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  state = {
    data:
  }
 
  render() {
    return (
      <div>
        <BarChart
          color="#70CAD1"
        />
        
        {/* Please Show a data graph here at the bottom for viewing too */}
      </div>  
    );
  }
}


