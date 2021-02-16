import React, { Component } from "react";
import Chart from "chart.js";
import "./BarChart.module.css";
import { Button } from "react-bootstrap";
import classes from "./BarChart.module.css";

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
    const myChartRef = this.chartRef.current.getContext("2d");
        
    new Chart(myChartRef, {
        type: "line",
        data: {
            //Bring in data
            labels: ["Jan", "Feb", "March"],
            datasets: [
                {
                    label: "Sales",
                    data: [86, 67, 91],
                }
            ]
        },
        options: {
            //Customize chart options
        }
    });

  }

  render() {
    return (
      <>
         <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
      
      </>
      );
  }
}
