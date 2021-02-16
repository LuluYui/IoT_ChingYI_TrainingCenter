import React, { Component } from "react";
import "./Dashboard.css";
import BarChart from "./BarChart.js";
import { managerData, yearLabels } from "./mockData";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    data: managerData,
    labels: yearLabels
  }
 
  render() {
    const { data, labels } = this.state;
    return (
      <div>
        <BarChart
          color="d4f1f9"
          data={data}
          labels={labels}
        />
        {/* Please Show a data graph here at the bottom for viewing too */}
      </div>  
    );
  }
}


