import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

export default class Auth {
    userProfile;

    auth0 = new auth0.WebAuth({
        domain: 'tclark.auth0.com',
        clientID: 'u7iTOVDjbr4hW4t3DlnPmAR3SI09Fwc4',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://tclark.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }
    getAccessToken() {
        const accessToken = this.localStorage.getItem('access_token')
        if (!accessToken) {
            throw new Error ('no access token found')
        }
        return accessToken;
    }

    getProfile(cb) {
        let accessToken = this.getAccessToken();
        console.log(accessToken)
        console.log(this.auth0.client)
        this.auth0.client.userInfo(accessToken, function(error, profile) {
            console.log()
            if (profile) {
                this.userProfile = profile;
            }
            cb(error, profile)
        })
    }
    
    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace('/home');
            } else if (err) {
                history.replace('/home');
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        history.replace('/home');
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/home');
    }

    isAuthenticated() {
        // Check whether the current time is past the 
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}