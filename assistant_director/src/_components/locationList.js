import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Location from './location'


class LocationList extends Component {

    render(){
        let locationArray = this.props.locations.map( (location) => {
            return(
                <Location 
                    key={location.id}
                    location={location}
                    name={location.name}
                    studentCapacity={location.studentCapacity}/>
            )   
        })
        return(
            <div className='locations'>
                {locationArray}
            </div>
        )
    }
}
export default LocationList

