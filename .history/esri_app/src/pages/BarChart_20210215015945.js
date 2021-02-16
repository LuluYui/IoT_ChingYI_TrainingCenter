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
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
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
