import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";
const AuthContext = createContext({
	token: "",
	isAuthenticated: false,
	isTokenExpired: () => {},
	login: (data) => {},
	logout: () => {},
	decodedToken: () => {},
});

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("x-auth"));
	const navigate = useNavigate();
	const login = (userToken) => {
		setToken(userToken);
		localStorage.setItem("x-auth", userToken);
	};
	const logout = () => {
		setToken(null);
		localStorage.removeItem("x-auth");
		setTimeout(() => {
			navigate("/login");
		}, 3000);
	};
	const DecodedToken = () => {
		// const token = localStorage.getItem("x-auth");
		try {
			if (token) {
				return jwtDecode(token);
			}
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	const isTokenExpired = () => {
		const decodedToken = jwtDecode(token);
		return decodedToken.exp < Date.now() / 1000;
	};

	const values = {
		token: token,
		isAuthenticated: !!token,
		isTokenExpired: isTokenExpired,
		login: login,
		logout: logout,
		decodedToken: DecodedToken,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const Login_Auth = () => {
	return useContext(AuthContext);
};

