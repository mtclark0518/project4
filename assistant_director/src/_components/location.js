
import React, {Component} from 'react'
import Student from './student'
import '../_styles/main.css'

class Location extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
        this.activate = this.activate.bind(this)
    }
    activate() {
        this.setState(prevState => ({
            active : !prevState.active
        }))
    } 
        
    render() {
        const activeState = this.state.active
        console.log(activeState)
        let classRoster = this.props.students.map( (student, index) => {
            return(<Student
                key={index}
                location={student.locationId}
                id={student.id}
                firstName={student.firstName} 
                lastName={student.lastName}
                gender={student.gender}
                pin={student.pin}
                onMoveStudent={this.props.onMoveStudent}/>)
        })
        console.log(classRoster)

        return(
            <div className='location'>
            <div className={this.props.name}>
                <div 
                    className='heading'
                    onClick={this.activate}>
                        <h3>{ this.props.name}</h3>
                </div>

                <div className={this.state.active}>
                {
                    this.state.active === true && (
                        <div>{classRoster}</div>
                    )
                }
                {
                    this.state.active === false && (
                        <div>Cur: {classRoster.length} |||  Cap: {this.props.studentCapacity}</div>
                    )
                }
                </div>

             </div>
             </div> 
        ) 
    }
}

export default Location


