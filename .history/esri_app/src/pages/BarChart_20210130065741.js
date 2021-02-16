import React, { Component } from "react";
import Chart from "chart.js";
import "./BarChart.css";

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {someData:[], moveMean:[]};
  }

  random_numbers(){
    var N = 100;
    var someData = [];
    for (var i = 0; i < N; i++)
    {
        someData.push([i,Math.random() * 100]);
    }
    
    var moveMean = [];
    for (i = 1; i < N-1; i++)
    {
        var mean = (someData[i][1] + someData[i-1][1] + someData[i+1][1])/3.0;
        moveMean.push([i,mean]);
    }
    
    this.setState({someData: someData, moveMean: moveMean})
  }

  componentDidMount() {
    this.random_numbers();
    console.log(this.state.someData, this.state.moveMean)
    this.myChart = new Chart(this.chartRef.current, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        datasets: [
          {
            label: "Data Logger Data",
            data: [this.state.someData],         
          },
          {
            label: "3 days moving averages",
            data: [this.state.someData],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}
