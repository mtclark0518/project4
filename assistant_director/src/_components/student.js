

import React,{Component} from 'react'
import '../_styles/main.css'
import UpdateStudent from './updateStudent'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            updating: false
        }
        this.moveStudent = this.moveStudent.bind(this)
    }

    moveStudent(){
        this.setState(prevState => ({
            updating : !prevState.updating
        }))
        console.log(this.state.updating)

    }
    render(){
        return(
        <div>
            <span>{this.props.firstName} {this.props.lastName} - {this.props.location}
                <button
                    onClick={this.moveStudent}>MOVE
                </button>
            </span>
        </div>
        )}

}
export default Student

