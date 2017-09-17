import React, { Component } from 'react';
import LocationList from '../_components/locationList';
import '../_styles/main.css'

class Container extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
			locations: [],
			students: []
        }
    }
	componentDidMount() {
		fetch('/api/locations')
		.then(res => res.json())
		.then(locations => this.setState({locations}))
		.then(fetch('/api/students')
		.then(res => res.json())
        .then(students => this.setState({students})))
	}
	
	getLocations = () => this.state.locations.length
	getStudents = () => this.state.students.length
	
	 
	render() {
		return ( 
			<div className = "container" >
				<div>{this.getLocations()}</div> 
				<div>{this.getStudents()} / </div>
			    <LocationList
                    locations={this.state.locations}
					students={this.state.students} /> 
			</div>
		)
	}
}

export default Container;