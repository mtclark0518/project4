import React, { Component } from 'react';
import LocationList from '../_components/locationList';
import '../_styles/main.css'

class LocationContainer extends Component {
    
    constructor() {
        super();
        this.state = {
            locations: []
        }
    }
	componentDidMount() {
		fetch('/api/locations')
		.then(res => res.json())
        .then(locations => this.setState({locations}))
	}
	
	getLocations = () => this.state.locations.length

	render() {
		return ( 
			<div className = "container" > 
			    <LocationList
                    locations={this.state.locations} /> 
            </div>
		)
	}
}

export default LocationContainer;