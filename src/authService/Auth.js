import { AUTH_CONFIG } from "./auth0_variables";
import history from '../history';
import { WebAuth } from 'auth0-js';

class Auth {
    accessToken;
    idToken;
    expiresAt;

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        this.renewSession = this.renewSession.bind(this);
    }

    auth0 = new WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        redirectUri: AUTH_CONFIG.callbackUrl,
        audience: AUTH_CONFIG.audience,
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    login = () => {
        this.auth0.authorize();
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log("in handle auth")
                console.log(authResult.accessToken)
                this.accessToken = authResult.accessToken;
                this.setSession(authResult);
            } else if (err) {
                history.replace('/home');
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    getAccessToken = () => {
        return this.accessToken;
    }

    getIdToken = () => {
        return this.idToken;
    }

    setSession = (authResult) => {
        // Set isLoggedIn flag in localStorage
        sessionStorage.setItem('isLoggedIn', 'true');

        // Set the time that the access token will expire at
        let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.expiresAt = expiresAt;
        sessionStorage.setItem('accessToken', this.accessToken);
        // navigate to the home route
        history.replace('/home');
    }

    renewSession = () => {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                this.logout();
                console.log(err);
                alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
            }
        });
    }

    logout = () => {
        // Remove tokens and expiry time
        this.accessToken = null;
        this.idToken = null;
        this.expiresAt = 0;

        // Remove isLoggedIn flag from localStorage
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('accessToken');
        // navigate to the home route
        history.replace('/home');
    }

    isAuthenticated = () => {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = this.expiresAt;
        if(new Date().getTime() < expiresAt) {
            console.log("auth")
            return true;
        } else {
            console.log("not auth")
            return false;
        }
    }


}

export default Auth;