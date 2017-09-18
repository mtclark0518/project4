import React, { Component } from 'react';
import LocationList from '../_components/locationList';
import '../_styles/main.css'
// import StudentService from '../_services/Student'
class Container extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
			locations: [],
			students: []
        }
	}
	fetchData(){}

	componentDidMount() {
		fetch('/api/locations')
		.then(res => res.json())
		.then(locations => this.setState({locations}))
		.then(fetch('/api/students')
		.then(res => res.json())
        .then(students => this.setState({students})))
	}
	
	update(location, id) {
		console.log(location)

	}

	moveStudent(location, id) {
		console.log(location)
		console.log(id)
		fetch('/api/students/' + id, {
			method: 'PUT',
			body: {
				location: location,
				id: id
			}
		}).then(this.componentDidMount())
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
					students={this.state.students}
					onMoveStudent={this.moveStudent.bind(this)} /> 
			</div>
		)
	}
}

export default Container;