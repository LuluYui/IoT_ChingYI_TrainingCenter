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
    super(props);
  }

  state = {};

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { data, average, labels } = this.props;

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    console.log(data);
    myLineChart = new Chart(myChartRef, {
      type: "scatter",
      showLine: true,
      data: {
        label: "random Number",
        datasets: [
          {
            label: "# of Votes",
            data: data,
            showLine: true,
            pointBackgroundColor: ["#000", "#00bcd6", "#d300d6"],
            pointBorderColor: ["#000", "#00bcd6", "#d300d6"],
            pointRadius: 5,
            pointHoverRadius: 5,
            fill: false,
            tension: 0,
            borderWidth: 1,
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
      </div>
    );
  }
}
