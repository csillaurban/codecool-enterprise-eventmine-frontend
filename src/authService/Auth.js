import { AUTH_CONFIG } from "./auth0_variables";

class Auth {
    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        redirectUri: AUTH_CONFIG.callbackUrl,
        audience: AUTH_CONFIG.audience,
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}

export default Auth;