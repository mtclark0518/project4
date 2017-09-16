import React, {Component} from 'react'


class Student extends Component {
    state = {students: []}

    componentDidMount() {
        fetch('/api/students')
        .then(res => res.json())
        .then(students => this.setState({students}))
    }
    
    render(){
        return(
            <div className="Student">
                This is a student component
                {this.state.students.map(student =>
                    <h1>{student.firstName}</h1>
                )}
            </div>
        )
    }
}
export default Student