import React, {Component} from 'react';
import './profile.css'

class Profile extends Component {
    componentWillMount() {
        this.setState({profile: {}})
        const { userProfile, getProfile } = this.props.auth
        if(!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile })
            })
        } else {
            this.setState({ profile: userProfile })
        }
    }
    render() {
        const { profile } = this.state;
        return (
            <div>
                <h1>{profile.name}</h1>
                <h1>You rock!</h1>
            </div>
        )
    }
}

export default Profile;