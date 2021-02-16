import React, { Component } from "react";
import "./Dashboard.css";
import BarChart from "./BarChart.js";
 
function getRandomDateArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  let baseTime = new Date('2018-05-01T00:00:00').getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  for(var i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}

function getFeeds() {
  let feeds = [];

  feeds.push({
    title: "Visits",
    data: getRandomDateArray(150),
  });

  feeds.push({
    title: "Categories",
    data: getRandomArray(20),
  });

  feeds.push({
    title: "Categories",
    data: getRandomArray(10),
  });

  feeds.push({
    title: "Data 4",
    data: getRandomArray(6),
  });

  return feeds;
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: getFeeds(),
    };
  }
 
  render() {
    return (
      <div>
        <BarChart
          data={this.state.feeds[1].data}
          title={this.state.feeds[1].title}
          color="#70CAD1"
        />
      </div>
    );
  }
}


