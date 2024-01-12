import {jwtDecode} from "jwt-decode"
export default function IsTokenExpired(token){
    try {
        if(token){

            const decodedToken = jwtDecode(token)
            console.log("decodedToken",decodedToken)
            return decodedToken.exp < Date.now() / 1000
        }
        
    } catch (error) {
        return true
    }
}