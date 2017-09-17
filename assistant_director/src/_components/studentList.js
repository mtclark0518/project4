import React, {Component} from 'react'
import Student from './student'


class StudentList extends Component {

    
    render(){
        let studentArray = this.props.students.map( (student, index) => {
            return(
                <Student 
                    key={index}
                    firstName={student.firstName}
                    lastName={student.lastName} />
            )   
        })
        return (
            <div className="students">
               {studentArray}
            </div>
        )
    }   
}

export default StudentList

