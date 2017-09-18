import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import '../_styles/main.css';

class HomePage extends Component {
	
	login = () => this.props.auth.login()

	render() {
		const { isAuthenticated } = this.props.auth;
		return ( 
			<div className = "homePage" > 
			{
				!isAuthenticated() && ( 
					<div className="landing">
					<h1>My AD</h1>
					<h6>Classroom Management & Ratio Maintenance</h6>
					<h4>
					You are not logged in! Please { ' ' } <a style = {{ cursor: 'pointer' } } onClick = { this.login.bind(this) }> Log In </a> { ' ' } to continue. 
					</h4>

					</div>
				)
			}
			{
				isAuthenticated() && (
					<div>
						<div>
							<Link to="profile">
								<button className='link'>admin</button>
							</Link>
						</div>
						<div><Container /></div>
						
					</div>
				)
			}
			</div> 
		);
	}
}

export default HomePage
