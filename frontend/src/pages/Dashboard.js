import React, { Component } from "react";
import BarChart from "../components/BarChart.js";
import classes from "./Dashboard.module.css";
import chartIcon from "../assets/chart-icon.svg";
import axios from 'axios'
import FlowChart from "../components/charts/FlowChart.js"

import {
  managerData,
  nationalAverageData,
  yearLabels,
  managerQuarterData,
  nationalAverageQuarterData,
  quarterLabels,
} from "./mockData";
import moment from "moment";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: managerData,
    average: nationalAverageData,
    labels: yearLabels,
  };

  transform_data = (data) => {
    var point = {}
    var dataPoints = []
    data.forEach(element => {
      point.y = element["C1 Pressure ()"]
      // point.x = element["Date/Time"].split(' ').join('T');
      // point.x = point.x.replace("Feb", "02")
      // var date = new Date('1995-12-17T03:24:00')
      // console.log(date)
      point.x = moment(point.x)
      dataPoints.push(point)
    })
    return dataPoints
  }

  componentDidMount() {
    this.genRandomNumber()
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    const options = {
      headers: { 
        'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
    }
    axios(options)
    const getData = async () => {
      try {
        const cors = 'https://cors-anywhere.herokuapp.com/'
        const res = await axios.get(`http://127.0.0.1:5000/`)
        const todos = this.transform_data(res.data);
        console.log(todos)
        this.setState({result: todos})
        return todos
      } catch (e) {
        console.error(e);
      }
    }

    getData() 
    console.log(this.state.result)
  }

  componentDidUpdate() {

  }

  genRandomNumber = (e) => {
    var limit = 50; //increase number of dataPoints by increasing this
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
    const { data, average, labels, result} = this.state;

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
        <div className={classes.charts}>
          <FlowChart data={result} average={average} labels={labels} />

          {/* <BarChart data={data} average={average} labels={labels} /> */}
        </div>
      </div>
    );
  }
}
