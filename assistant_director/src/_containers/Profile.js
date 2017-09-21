import React, {Component} from 'react';
import Location from '../_components/location'
import '../_styles/main.css'
import TeacherDash from '../_components/teacherDash'
class Profile extends Component {


    componentWillMount(){
        this.setState({
            profile: {}
        })
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
        const user = this.state.profile.sub
        console.log(user)
        const { profile } = this.state;
        return (
            <div>
            {
                user && (
                <div>
                    <TeacherDash
                        account={this.state.profile} />
                    this is the profile id i can store - 
                    {user}    


                <h4>this is what comes back from auth0</h4>                
                <pre>{JSON.stringify(profile, null, 2)}</pre>
                </div>

                )
            },
            {
                !user && (
                    <h1>uh oh you shouldn't be here</h1>
                )
            }
            

            </div>
        )
    }
}

export default Profile;
