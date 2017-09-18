

import React,{Component} from 'react'
import '../_styles/main.css'
import UpdateStudent from './updateStudent'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            updating: false
        }
        this.update = this.update.bind(this)
    }

    update(){
        this.setState(prevState => ({
            updating : !prevState.updating
        }))
        console.log(this.state.updating)

    }
    render(){
        let updateStudent = this.state.updating          
        return(
        <div>
            {
                updateStudent === true && (
                    <div className="updateStudent">
                        <UpdateStudent
                            student={this.props}
                            onMoveStudent={this.props.onMoveStudent} />
                        <button
                            onClick={this.update}>cancel
                        </button>
                    </div>
                )
            }
            {
                updateStudent === false && (
            <span>
                    {this.props.firstName} {this.props.lastName} - {this.props.location}
                
                <button
                    onClick={this.update}>MOVE
                </button>
            </span>
                )
            }

        </div>
        )}

}
export default Student

