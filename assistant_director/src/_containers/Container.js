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
	componentDidMount() {
		this.fetchData()
	}
	fetchData(){
		fetch('/api/locations')
		.then(res => res.json())
		.then(locations => this.setState({locations}))
		.then(fetch('/api/students')
		.then(res => res.json())
        .then(students => this.setState({students})))
	}
	

	moveStudent(data, id) {
		console.log(id)
		fetch('/api/student/' + id, {
			method: 'PUT',
			body: {'body': JSON.stringify(data)},		

		})
		.then(fetch('/api/students')
		.then(res => res.json())
        .then(students => this.setState({students})))
	}
	
	getLocations = () => this.state.locations.length
	getStudents = () => this.state.students.length

	 
	render() {
		return ( 
			<div className = "container" >
				
				
				<div className="dashHeading">
					<span>{this.getStudents()} Students Present</span>
					<span>Manage Your Students</span>
					<button>Sign-In</button>
				</div>

			    <LocationList
                    locations={this.state.locations}
					students={this.state.students}
					onMoveStudent={this.moveStudent.bind(this)} /> 
			</div>
		)
	}
}

export default Container;