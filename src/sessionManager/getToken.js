export default function GetToken(tokenName){
    
    const token = localStorage.getItem(tokenName);
    if(token){

        return token 
    }
    return null
}