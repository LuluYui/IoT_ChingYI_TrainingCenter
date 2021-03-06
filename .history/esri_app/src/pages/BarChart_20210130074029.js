import React, { Component } from "react";
import Chart from "chart.js";
import "./BarChart.css";
import { Button } from "react-bootstrap";

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.random_numbers = this.random_numbers.bind(this)
    this.state = {someData:[props.someData], moveMean:[props.moveMean]};
    
  }

  random_numbers(){
    var N = 100;
    var someData = [];
    var i;
    for (i = 0; i < N; i++)
    {
        someData.push([Math.random() * 100,i]);
    }
    
    var moveMean = [];
    for (i = 1; i < N-1; i++)
    {
        var mean = (someData[i][1] + someData[i-1][1] + someData[i+1][1])/3.0;
        moveMean.push([i,mean]);
    }
    
    this.setState({someData: someData, moveMean, moveMean})
    return <Button onClick={this.setState({sth: 1})}>Refresh</Button>;
  }

  componentDidMount() {
    this.random_numbers();
    this.setState({sth: "1"})
    this.myChart = new Chart(this.chartRef.current, {
      type: "line",
      data: {
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
            data: [
              [1, 100],
              [2, 50],
              [3, 60],
              [4, 70],
              [5, 80],
              [6, 90],
              [7,5],

            ],         
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
    return (
      <>
      <canvas ref={this.chartRef} data={this.state.moveMean}/>
      
      </>
      );
  }
}
