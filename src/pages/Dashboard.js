import React, { Component } from "react";
import "./Dashboard.css";
import BarChart from "./BarChart.js";
import classes from "./Dashboard.module.css"
import chartIcon from "../assets/chart-icon.svg";
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
    const { data, average, labels } = this.state;
    return (
      <div className={classes.container}>
                <header>
                    <img src={chartIcon} alt="bar chart icon" />
                    <h1>Flow Chart</h1>
                </header>

                <div className={classes.buttonContainer}>
                    <button
                        value="annual"
                        onClick={this.handleButtonClick}
                    >
                        Flow Logger1
                    </button>

                    <button
                        value="lastquarter"
                        onClick={this.handleButtonClick}
                    >
                        Flow Logger 2
                    </button>
                </div>

                <BarChart
                    data={data}
                    average={average}
                    labels={labels} />

            </div>
    );
  }
}


