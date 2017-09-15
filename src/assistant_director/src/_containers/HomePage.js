import React, { Component } from 'react';
import Profile from '../_components/profile';
class HomePage extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return ( 
            <div className = "container" > 
            {
                isAuthenticated() 
                    // <Profile />
                
            } 
            {
                !isAuthenticated() && ( 
                    <h4>
                    You are not logged in !Please { ' ' } 
                    <a style = {{ cursor: 'pointer' } } onClick = { this.login.bind(this) }> Log In </a> { ' ' } to continue. 
                    </h4>
                )
            } </div>
        );
    }
}

export default HomePage;