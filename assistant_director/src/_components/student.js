

import React,{Component} from 'react'
import '../_styles/main.css'

class Student extends Component {

    render(){
        return(
        <li>
            <span>{this.props.firstName} {this.props.lastName}</span>
        </li>
        )}

}
export default Student

