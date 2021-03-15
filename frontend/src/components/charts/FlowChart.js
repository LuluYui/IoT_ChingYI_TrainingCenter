import React, { Component } from "react";
import Chart from "chart.js";
import classes from "./FlowChart.module.css";
import moment from "moment";
let myLineChart;

//--Chart Style Options--//

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;

//--Chart Style Options--//
export default class FlowChart extends Component {
  chartRef = React.createRef();
  state = {};

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const {data} = this.props;
    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myChartRef, {
      type: "scatter",
      showLine: true,
      data: {
        label: "EM Flow Meter Flowrate",
        datasets: [
          {
            label: "Time",
            data: data,
            showLine: true,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: false,
            tension: 0,
            borderWidth: 1,
          },
        ],
      },
      options: {
        //Customize chart options
        scales: {

          xAxes: [{
            type: 'time',
            tick: {
            },
            time: {
              unit: "second",
              displayFormats: {
                second: 'h:mm:ss a'
              }
            }
          }], 
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
      },
    });
  };

  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
