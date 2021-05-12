import axios from 'axios'

const baseUrl = 'http://0.0.0.0:8000/api/';

const axiosInstance = axios.create({
    baseUrl: baseUrl,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json'
    },
});

// axiosInstance.interceptors.use(
//     (response) =>
//         new Promise((resolve, reject) => {
//             resolve(response)
//         }),
//     (error) => {
//         if (!error.response) {
//             return new Promise((resolve, reject) => {
//                 reject(error)
//             });
//         }
//         if (error.response.status === 403) {
//             localStorage.removeItem("token")
//             window.location = "/login";
//         }
//         else {
//             return new Promise((resolve, reject) => {
//                 reject(error)
//             });
//         }
//     }
// );



export default axiosInstance;