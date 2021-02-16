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
  
  state = {
  }
  
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
    
    myLineChart = new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        dataset:[{
          data: [10, 20, 0.5, 200],
          fill: false, 
        }]
      },
      options: {
        //Customize chart options
        scales:{
          yAxes:[{
            type: 'myScales'
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
