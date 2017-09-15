import React, {Component} from 'react'

class Location extends Component {

    componentDidMount() {
        fetch('/api/locations')
        .then(res => res.json())
        .then(locations => this.setState({locations}))
        console.log(this.state);
    }
    render() {
        return (
            <div className="Location">
                <p data-locations-index={this.props.location._id}>
                    <span> {this.props.location.name} </span>
                </p>
            </div>
        )
    }
}
export default Location