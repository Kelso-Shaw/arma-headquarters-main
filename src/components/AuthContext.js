import { apiRequest } from "./funcs/common";
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

const TOKEN_EXPIRATION_TIME = 8 * 60 * 60 * 1000; // 8 hours in milliseconds

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({
		isAuthenticated: false,
		token: null,
		role: null,
	});

	useEffect(() => {
		const token = localStorage.getItem("token");
		const expiration = localStorage.getItem("tokenExpiration");
		const role = localStorage.getItem("role");
		const id = localStorage.getItem("id");
		const isTokenExpired =
			expiration && new Date().getTime() > Number(expiration);

		if (token && !isTokenExpired) {
			setAuth({
				isAuthenticated: true,
				token,
				role,
				id,
			});
		} else {
			localStorage.clear();

			setAuth({
				isAuthenticated: false,
				token: null,
				role: null,
			});
		}
	}, []);

	const login = async (username, password) => {
		try {
			const response = await apiRequest(
				"players/login",
				"POST",
				{ username, password },
				null,
			);

			const expirationTime = new Date().getTime() + TOKEN_EXPIRATION_TIME;

			setAuth({
				isAuthenticated: true,
				token: response.accessToken,
				role: response.rank,
				id: response.id,
				username: response.username,
			});
			localStorage.setItem("token", response.accessToken);
			localStorage.setItem("tokenExpiration", expirationTime);
			localStorage.setItem("rank", response.rank);
			localStorage.setItem("id", response.id);
			localStorage.setItem("username", response.username);

			return { success: true };
		} catch (error) {
			return { success: false, message: error.message };
		}
	};

	const register = async (username, password, role) => {
		try {
			const response = await apiRequest(
				"players/register",
				"POST",
				{ username, password, role },
				null,
			);

			const expirationTime = new Date().getTime() + TOKEN_EXPIRATION_TIME;

			setAuth({
				isAuthenticated: true,
				token: response.accessToken,
				role: response.rank,
				id: response.id,
				username: response.username,
			});
			localStorage.setItem("token", response.accessToken);
			localStorage.setItem("tokenExpiration", expirationTime);
			localStorage.setItem("rank", response.rank);
			localStorage.setItem("id", response.id);
			localStorage.setItem("username", response.username);

			return { success: true };
		} catch (error) {
			return { success: false, message: error.message };
		}
	};

	const logout = () => {
		setAuth({
			isAuthenticated: false,
			token: null,
		});
		localStorage.clear();
	};

	return (
		<AuthContext.Provider value={{ auth, login, logout, register }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
