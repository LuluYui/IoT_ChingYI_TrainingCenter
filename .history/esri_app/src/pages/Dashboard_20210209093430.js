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

  genRandomNumber = (e) => {
    const {value} = e.target;
    
    var limit = 500000; //increase number of dataPoints by increasing this
    var y = 0;
    var data = [];
    var dataSeries = {
      type: "line",
      showInLegend: true,
    };

    var dataPoints = [];
    for (var i = 0; i < limit; i += 1) {
      y += Math.random() * 10 - 5;
      dataPoints.push({
        x: i - limit / 2,
        y: y,
      });
    }

    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);

    this.setState({data: data, random: data})
    return data;
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
      data: newData,
      average: newAverage,
      labels: newLabels,
    });
  };

  render() {
    const { random, data, average, labels } = this.state;
    console.log(random + " " +  data)
    console.log(data[0][dataPoints][0])
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

          <button value="lastquarter" onClick={this.genRandomNumber}>
            Flow Logger 2
          </button>

          <button value="genRandom" onClick={this.genRandomNumber}>
            Generate Random Number
          </button>
        </div>

        <BarChart data={data} average={average} labels={labels} />

        <table class="table-primary">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Last</th>
              <th scope="col">First</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@modo</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
