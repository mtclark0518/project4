import React, { Component } from 'react';
import LocationList from '../_components/locationList';
import '../_styles/main.css'
const axios = require('axios')
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
		this.getData()
	}
	getData(){
		axios.get('api/locations')
			.then(response => {
				this.setState({ locations: response.data })})
				.then(axios.get('api/students')
					.then(response => {
						this.setState({ students: response.data })
		}))

	}
	moveStudent(id, item){
		console.log('move student has been called')
		axios({
			method: 'PUT',
			url: 'api/student/'+id, 
			data:{data: item}})
			.then(response => {
				console.log(response.data)
				this.getData();
			})
	}

	
	
	
	// fetchData(){
	// 	fetch('/api/locations')
	// 	.then(res => res.json())
	// 	.then(locations => this.setState({locations}))
	// 	.then(fetch('/api/students')
	// 	.then(res => res.json())
    //     .then(students => this.setState({students})))
	// }
	

	// moveStudent(data, id) {
	// 	console.log(id)
	// 	fetch('/api/student/' + id, {
	// 		method: 'PUT',
	// 		body: 'this is the body',		

	// 	})
	// 	.then(fetch('/api/students')
	// 	.then(res => res.json())
    //     .then(students => this.setState({students})))
	// }
	createStudent(data) {
		fetch('/api/students', {
			method: 'POST',
			body: JSON.stringify(data)
		});
	}
	
	getLocations = () => this.state.locations.length
	getStudents = () => this.state.students.length

	 
	render() {
		return ( 
			<div className = "container" >
				
				
				<div className="dashHeading">
					<span>{this.getStudents()} Students Present</span>
					<span>Manage Your Students</span>
					<button
						onClick={this.createStudent}>Sign-In</button>
					<button>Sign-Out</button>
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