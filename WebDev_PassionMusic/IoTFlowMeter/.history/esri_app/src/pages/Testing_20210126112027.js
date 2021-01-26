import React, { Component } from "react";


export default class Testing extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
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

    // this.myChart = new BarChart(this.canvasRef.current, {
    //   type: 'bar',
    //   data: {
    //     labels: this.props.data.map(d => d.label),
    //     datasets: [{
    //       label: this.props.title,
    //       data: this.props.data.map(d => d.value),
    //       backgroundColor: this.props.color
    //     }]
    //   }
    // });
  }

  render() {
    return <h1>Hello World</h1>;
  }
}
