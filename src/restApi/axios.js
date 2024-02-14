import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:3002"
axios.defaults.headers.common["x-auth"] = localStorage.getItem("AUTHORIZATION")
axios.defaults.headers.post["content-type"] ="application/json"

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}