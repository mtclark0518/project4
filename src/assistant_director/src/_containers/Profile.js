import React, {Component} from 'react';
import '../App.css'
import Location from '../_components/location'
import Student from '../_components/student'

class Profile extends Component {

    componentWillMount(){
        this.setState({profile: {}})
        const { userProfile, getProfile } = this.props.auth;
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
                <h1>{profile.given_name}</h1>
                <h1>{profile.family_name}</h1>
                <div>
                    <Student />
                    <Location/>
                </div>
                <h4>this is what comes back from auth0</h4>                
                <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
        )
    }
}

export default Profile;
