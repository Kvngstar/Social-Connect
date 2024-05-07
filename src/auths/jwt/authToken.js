import { jwtDecode } from "jwt-decode";

const type = "x-auth";
export default function GetToken() {
	const token = localStorage.getItem(type);
	if (token) {
		return token;
	}
	return null;
}

export function IsTokenExpired() {
	const token = localStorage.getItem(type);
	try {
		if (token) {
			const decodedToken = jwtDecode(token);
			return decodedToken.exp < Date.now() / 1000;
		}
	} catch (error) {
		console.log(error);
		return true;
	}
}
export function DecodedToken() {
	const token = localStorage.getItem(type);
	try {
		if (token) {
			return jwtDecode(token);
		}
	} catch (error) {
		console.log(error);
		return true;
	}
}

export function RemoveToken() {
	localStorage.removeItem(type);
}

export function SetToken(token, tokenName) {
	localStorage.setItem(tokenName, token);
}
