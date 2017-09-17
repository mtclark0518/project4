
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../_styles/main.css'
import StudentContainer from '../_containers/StudentContainer'

class Location extends Component {

    render(){
        return(
        <li>
            <h3>{this.props.name} - {this.props.studentCapacity}</h3>
        </li>
        )
    }
}
export default Location


