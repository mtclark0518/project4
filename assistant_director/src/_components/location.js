
import React, {Component} from 'react'
import '../_styles/main.css'
import Student from './student'
class Location extends Component {

    render(){
        let classRoster = this.props.students.map( (student) => {
            return(<Student
                key={student.id}
                location={this.props.name}
                firstName={student.firstName} 
                lastName={student.lastName}
                gender={student.gender}
                pin={student.pin}/>)
        })
        console.log(classRoster)
        return(
            <div className={this.props.name}>
                <div className='heading'>
                    <h3>{this.props.name} - {this.props.id}</h3>
                </div>
                <div className='locationDetails'>
                    <div className="detail">
                        {this.props.students.length}
                    </div>
                    <div className="detail">
                        {classRoster}
                    </div>
                    <div className="detail">
                        {this.props.studentCapacity}
                    </div>
                </div>
            </div>
        )
    }
}
export default Location


