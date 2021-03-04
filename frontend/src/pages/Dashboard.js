import React, { Component } from "react";
import BarChart from "../components/BarChart.js";
import classes from "./Dashboard.module.css";
import chartIcon from "../assets/chart-icon.svg";
import axios from 'axios'
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

  query_data = () => {

  }

  componentDidMount() {
    this.genRandomNumber()
    console.log("something is wrong")

    const getData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:5001/')
        console.log("running this code")
        const todos = res.data;
        return todos
      } catch (e) {
        console.error(e);
      }
    }

    this.setState({result: getData()})

  }

  componentDidUpdate() {

  }

  genRandomNumber = (e) => {
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

    console.log(this.state.result)
  };

  render() {
    const { random, data, average, labels } = this.state;
    return (
   
   <div className={classes.container}>
        <header>
          <img src={chartIcon} alt="flow chart icon" />
          <h1>Flow Chart</h1>
        </header>

      <div className={classes.buttonContainer}>
        <button 
          value="console show"
          onClick={this.handleButtonClick}
          >
            Last Quarter
          </button>
      </div>        
        <div className={classes.container}>
          <BarChart data={data} average={average} labels={labels} />
        </div>
      </div>
    );
  }
}
