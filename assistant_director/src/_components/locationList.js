import React, {Component} from 'react'
import Location from './location'
import Student from './student'


class LocationList extends Component {        
    render(){
        let studentArray = this.props.students.map( (student, index) => {
            return(<Student
                key={index}
                student={student}                
                id={student.id}
                location={student.locationId} />)
        })
        let locationArray = this.props.locations.map( (location) => {
            return(
                <Location 
                    key={location.id}
                    id={location.id}
                    students={location.students}
                    name={location.name}
                    studentCapacity={location.studentCapacity}/>
                )   
        })
        return(
            <div className='locations'>
                {locationArray}
            </div>
        )
    }
}
export default LocationList

