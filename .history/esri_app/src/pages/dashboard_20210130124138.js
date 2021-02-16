import React, { Component } from "react";
import "./Dashboard.css";
import BarChart from "./BarChart.js";
import {managerData, nationalAverageData, yearLabels, managerQuarterData, nationalAverageQuarterData, quarterLabels} from "./mockData";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    data: managerData,
    average: nationalAverageData,
    labels: yearLabels
  }

  handleButtonClick = e => {
    const { value } = e.target;
    const isAnnual = value === "annual";

    const newData = isAnnual ? managerData : managerQuarterData;
    const newLabels = isAnnual ? yearLabels : quarterLabels;
    const newAverage = isAnnual ? nationalAverageData : nationalAverageQuarterData;

    this.setState({
        data: newData,
        average: newAverage,
        labels: newLabels
    })
}
 
  render() {
    const { data, labels } = this.state;
    return (
      <div>
        <BarChart
          color="#d4f1f9"
          data={data}
          labels={labels}
        />
        {/* Please Show a data graph here at the bottom for viewing too */}
      </div>  
    );
  }
}


