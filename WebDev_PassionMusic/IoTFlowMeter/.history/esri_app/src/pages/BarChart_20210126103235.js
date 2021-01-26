import React, {Component} from 'react';
import './BarChart.css'

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.state = {
          
        };
      }
      
      componentDidMount() {
        
        
      }
      

  render() {
    return (

        <canvas ref={this.chartRef} />

      );
  }
}

