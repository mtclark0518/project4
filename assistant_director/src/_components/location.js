
import React, {Component} from 'react'
import '../_styles/main.css'
import Student from './student'
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
                
                <div 
                    className='heading'
                    onClick={this.activate}>
                        <h3>{ this.props.name} - {this.props.id}</h3>
                </div>

                <div className={this.state.active}>
                {
                    this.state.active === true && (
                        <p>{classRoster}</p>
                    )
                }
                {
                    this.state.active === false && (
                        <p>{classRoster.length}</p>
                    )
                }
                </div>

             </div> 
        ) 
    }
}

export default Location


