import React, { Component } from 'react';
import StudentList from '../_components/studentList';
import '../_styles/main.css'
class StudentContainer extends Component {
	constructor() {
        super();
        this.state = {
            students: []
        }
    }
	componentDidMount() {
		fetch('/api/students')
		.then(res => res.json())
        .then(students => this.setState({students}))
	}
	
	getStudents = () => this.state.students.length

	render() {
		return ( 
			<div className = "container" > 
			    <StudentList
                    students={this.state.students} /> 
            </div>
		)
	}
}

export default StudentContainer;