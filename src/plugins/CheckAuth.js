import axios from 'axios';
export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    },
});
// let isAuthenticated = false;
let isLoggedIn = false;

// export function login() {
//     // Perform login logic, e.g., send a request to the server and obtain an authentication token
//     isAuthenticated = true;
// }

// export function logout() {
//     // Perform logout logic, e.g., clear the authentication token
//     isAuthenticated = false;
// }

export function checkAuth() {
    // Check if the user is authenticated, e.g., by verifying the presence of an authentication token
    // return isAuthenticated;    
    axiosInstance.get('/api/admins').then((response) => {
        console.log("is logged in");
        console.log(response);
        isLoggedIn = true;
    }).catch(error => {
        console.log("not logged in");
        console.log(error);
        isLoggedIn = false;
    });
    // return localStorage.getItem('isLoggedIn') == '1';
    return isLoggedIn;
}
