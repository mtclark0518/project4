

import React,{Component} from 'react'
import '../_styles/main.css'

class Student extends Component {


    moveStudent(){
        console.log('move button pushed')
    }
    render(){
        return(
        <div>
            <span>{this.props.firstName} {this.props.lastName} - {this.props.location}
                <button
                    onClick={this.moveStudent}>MOVE</button>
            </span>
        </div>
        )}

}
export default Student

