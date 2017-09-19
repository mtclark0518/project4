import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import Student from './student'


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Red',
    'Green',
  ],
  datasets: [{
    data: [ 2, 2],
    backgroundColor: [
    '#CCC',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#FFCE56'
    ]
  }]
});

export default React.createClass({
  displayName: 'Location Capacity Doughnut',

	getInitialState() {
		return getState();
	},

	componentWillMount() {

	},

  render() {
    return (
      <div>
        <Doughnut 
        location={this.props.location}
        data={this.state} />
      </div>
    );
  }
});