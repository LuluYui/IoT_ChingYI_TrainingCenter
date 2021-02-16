import React, { Component } from "react";
import "./Dashboard.css";
import BarChart from "./BarChart.js";
import classes from "./Dashboard.module.css";
import chartIcon from "../assets/chart-icon.svg";
import {
  managerData,
  nationalAverageData,
  yearLabels,
  managerQuarterData,
  nationalAverageQuarterData,
  quarterLabels,
} from "./mockData";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: managerData,
    average: nationalAverageData,
    labels: yearLabels,
  };

  componentDidMount() {
    this.genRandomNumber()
  }

  genRandomNumber = () => {
    var limit = 10; //increase number of dataPoints by increasing this
    var y = 0;
    var dataPoints = [];
    var dataSeries = {
      type: "line",
      showInLegend: true,
    };

    var data =[]
    for (var i = 0; i < limit; i += 1) {
      y += Math.floor(Math.random() * (100- 30+ 1) + 30);
      console.log(i, y)
      dataPoints.push({
        x: i,
        y: y,
      });
    }
    
    this.setState({data: dataPoints, random: data})
  };

  handleButtonClick = (e) => {
    const { value } = e.target;
    const isAnnual = value === "annual";

    const newData = isAnnual ? managerData : managerQuarterData;
    const newLabels = isAnnual ? yearLabels : quarterLabels;
    const newAverage = isAnnual
      ? nationalAverageData
      : nationalAverageQuarterData;

    this.setState({
      average: newAverage,
      labels: newLabels,
    });
  };

  render() {
    const { random, data, average, labels } = this.state;
    return (
      <div className={classes.container}>
        <header>
          <img src={chartIcon} alt="bar chart icon" />
          <h1>Flow Chart</h1>
        </header>

        <div className={classes.buttonContainer}>
          <button value="annual" onClick={this.handleButtonClick}>
            Flow Logger1
          </button>

          <button value="genRandom" onClick={this.genRandomNumber}>
            Generate Random Number
          </button>
        </div>

        <BarChart data={data} average={average} labels={labels} />
      </div>
    );
  }
}
