import React, {Component} from 'react'
import Location from './location'
import Student from './student'


class LocationList extends Component {        
    render(){
        let studentArray = this.props.students.map( (student) => {
            return(<Student
                key={student.id}
                location={student.locationId}                 
                student={student}                
                id={student.id} />)
        })
        console.log(studentArray)
        let locationArray = this.props.locations.map( (location) => {
            return(
                <Location 
                    key={location.id}
                    id={location.id}
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
                <div>
                </div>
                    
                </div>
            </div>
        )
    }
}
export default LocationList

