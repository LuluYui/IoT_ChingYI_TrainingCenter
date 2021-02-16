import React, {Component} from 'react';
import { Chart } from 'react-chartjs-2';
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

import './BarChart.css'

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.state = {
          
        };
      }
      
      componentDidMount() {
        Chart.pluginService.register({
          afterDraw: function (chart, easing) {
            // Plugin code.

          }
        });
        
      }
      

  render() {
    return (

        <canvas ref={this.chartRef} />

      );
  }
}

