export default function GetToken(tokenName){
    return localStorage.getItem(tokenName);
}