import React, {Component} from 'react';
import Bar
import './BarChart.css'

export default class BarChart extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.state = {
          
        };
      }
      
      componentDidMount() {
        
        this.myChart = new BarChart(this.canvasRef.current, {
          type: 'bar',
          data: {
            labels: this.props.data.map(d => d.label),
            datasets: [{
              label: this.props.title,
              data: this.props.data.map(d => d.value),
              backgroundColor: this.props.color
            }]
          }
        });
        
      }

  render() {
    return (

        <canvas ref={this.chartRef} />

      );
  }
}