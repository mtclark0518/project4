import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Location from './location'


class LocationList extends Component {

    render(){
        return(
            <ul>
                {props.locations.map((location, index) =>
                    <Location
                        key={index} 
                        name={location.name}
                        studentCapacity={location.studentCapacity} />
                )}
            </ul>
        )
    }
}
export default LocationList
// class LocationList extends Component {

    // state = {
    //     students : [],
    // }
    // // componentDidMount() {
    // //     fetch('/api/locations')
    // //     .then(res => res.json())
    // //     .then(locations => this.setState({locations}))
    // //     console.log(this.state);
    // // }
    // getStudents = () => this.state.students.length




// render(){
//     return()


// }
// }
