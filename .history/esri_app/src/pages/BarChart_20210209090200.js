import React, { Component } from "react";
import Chart from "chart.js";
import classes from "./BarChart.module.css";
let myLineChart;

//--Chart Style Options--//

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;
//--Chart Style Options--//

export default class BarChart extends Component {
  chartRef = React.createRef();

  constructor(props) {
    super(props)
  
  }

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  genRandomNumber = () => {
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
    this.setState()
    return data
  };

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { data, average, labels } = this.props;

    var random = this.genRandomNumber();
    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: "Flow Rate",
            data: random,
            fill: false,
            borderColor: "#6610f2",
          },
          {
            label: "National Average",
            data: average,
            fill: false,
            borderColor: "#E0E0E0",
          },
        ],
      },
      options: {
        //Customize chart options

      },
    });


  };

  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas id="myChart" ref={this.chartRef} /> 
        <canvas id="flowChart" ref={this.chart2Ref} /> 
      </div>
    );
  }
}
