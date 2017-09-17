
import React, {Component} from 'react'
import '../_styles/main.css'

class Location extends Component {

    render(){
        
        const students = [];
        let studentCounter = this.students;
        return(
            <div className={this.props.name}>
                <div className='heading'>
                    <h3>{this.props.name} - {this.props.id}</h3>
                </div>
                <div className='locationDetails'>
                    <div className="detail">
                        {this.props.location.students.length}
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


