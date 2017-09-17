
import React, {Component} from 'react'
import '../_styles/main.css'

class Location extends Component {

    render(){
        return(
            <div>{this.props.name} - {this.props.studentCapacity}</div>
        )
    }
}
export default Location


