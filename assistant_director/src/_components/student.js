

import React,{Component} from 'react'
import '../_styles/main.css'

class Student extends Component {

    render(){
        return(
        <div>
            <span>{this.props.firstName} {this.props.lastName} - {this.props.location}</span>
        </div>
        )}

}
export default Student

