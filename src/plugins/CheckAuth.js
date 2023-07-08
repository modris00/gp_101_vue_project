// auth.js

let isAuthenticated = false;

export function login() {
    // Perform login logic, e.g., send a request to the server and obtain an authentication token
    // if (localStorage.getItem('isLoggedIn') == '1') {
    isAuthenticated = true;
    // } else {
    // isAuthenticated = false;
    // }

}

export function logout() {
    // Perform logout logic, e.g., clear the authentication token
    isAuthenticated = false;
}

export function checkAuth() {
    // Check if the user is authenticated, e.g., by verifying the presence of an authentication token
    // return isAuthenticated;
    return localStorage.getItem('isLoggedIn') == '1';
}
