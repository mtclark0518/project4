import React, { Component } from 'react'
import Location from './location'

class LocationList extends Component {
    render() {
        let locationArray = this.props.locations.map((location) => {
            return ( < Location key = { location._id }
                location = { location }
                />
            )
        })

        return ( 
            <div className = "locations" > { locationArray } </div>
        )
    }
}
export default LocationList