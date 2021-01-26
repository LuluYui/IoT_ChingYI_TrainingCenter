import React, {Component} from 'react';
import 'Dashboard.css'
import BarChart from './BarChart.js'

export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (

     <BarChart/>

      );
  }
}
