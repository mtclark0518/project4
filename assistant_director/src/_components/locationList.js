import React, {Component} from 'react'
import Location from './location'
import Student from './student'
import '../_styles/main.css'


class LocationList extends Component {        
    render(){
        let studentArray = this.props.students.map( (student) => {
            return(<Student
                key={student.id}
                location={student.locationId}                 
                student={student}                
                id={student.id}
                onMoveStudent={this.props.onMoveStudent} />)
        })
        console.log(studentArray)
        let locationArray = this.props.locations.map( (location) => {
            return(
                <Location 
                    key={location.id}
                    id={location.id}
                    onMoveStudent={this.props.onMoveStudent}
                    students={location.students}
                    name={location.name}
                    studentCapacity={location.studentCapacity}
                    studentArray={studentArray}/>
                )   
        })
        return(
            <div>
                <div className='locations'>
                    {locationArray}            
                </div>
            </div>
        )
    }
}
export default LocationList

