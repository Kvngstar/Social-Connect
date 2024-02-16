import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:3000/api/v1"
axios.defaults.headers.common["x-auth"] = localStorage.getItem("x-auth")
axios.defaults.headers.post["content-type"] ="application/x-www-form-urlencoded"

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}