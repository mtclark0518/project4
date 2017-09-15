import React, {Component} from 'react';
import '../App.css'

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
                
                <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>

        )
    }
}

export default Profile;
// import React, { Component } from 'react';
// // import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
// // import './Profile.css';

// class Profile extends Component {
//   componentWillMount() {
//     this.setState({ profile: {} });
//     const { userProfile, getProfile } = this.props.auth;
//     if (!userProfile) {
//       getProfile((err, profile) => {
//         this.setState({ profile });
//       });
//     } else {
//       this.setState({ profile: userProfile });
//     }
//   }
//   render() {
//     const { profile } = this.state;
//     return (
//       <div className="container">
//         <div className="profile-area">
//           <h1>{profile.name}</h1>
//           {/* <Panel header="Profile"> */}
//             <img src={profile.picture} alt="profile" />
//             <div>
//               {/* <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel> */}
//               <h3>{profile.nickname}</h3>
//             </div>
//             <pre>{JSON.stringify(profile, null, 2)}</pre>
//           {/* </Panel> */}
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;