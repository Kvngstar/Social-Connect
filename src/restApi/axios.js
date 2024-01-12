import axios from "axios"
axios.defaults.baseURL = "http://localhost:3001"
axios.defaults.headers.common["x-auth"] = localStorage.getItem("AUTHORIZATION")
axios.defaults.headers.post["content-type"] ="application/x-www-form-urlencoded"

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}