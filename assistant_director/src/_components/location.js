import React, {Component} from 'react'
import Student from '../_components/student'

class Location extends Component {

state = {locations : []}
    componentDidMount() {
        fetch('/api/locations')
        .then(res => res.json())
        .then(locations => this.setState({locations}))
        console.log(this.state);
    }
    render() {
        return (
            <div className="Location">
                    {this.state.locations.map(location => 
                    <div key={location.id}>
                        <h1>  {location.name} </h1>
                        <p> Capacity: {location.studentCapacity} </p>
                        <Student />
                    </div>
                    )}
            </div>
        )
    }
}
export default Location