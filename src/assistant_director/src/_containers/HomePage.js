import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return ( 
            <div className = "container" > 
            {
                isAuthenticated() && (
                    <h3><Link to="profile">link</Link></h3>
                )

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