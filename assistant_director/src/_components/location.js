
import React, {Component} from 'react'
import '../_styles/main.css'

class Location extends Component {

    render(){
        return(
            <div className={this.props.name}>
                <div className='heading'>
                    <h3>{this.props.name}</h3>
                </div>
                <div className='locationDetails'>
                    <div className="detail">
                        {/* <StudentCounter /> */}
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


