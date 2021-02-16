import React, {Component} from 'react';
import 'Dashboard.css'
import BarChart from './BarChart.js'

export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      feeds: getFeeds()
    };
  }

  render() {
    return (

      <BarChart
          data={this.state.feeds[1].data}
          title={this.state.feeds[1].title}
          color="#70CAD1"
        />

      );
  }
}
