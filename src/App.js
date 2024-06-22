import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import { ThemeToggleProvider } from "./ThemeContext";
import Nav from "./components/Nav";
import Home from "./components/home/Home";

function App() {
	const clanName = process.env.REACT_APP_CLAN_NAME;

	return (
		<ThemeToggleProvider>
			<AuthProvider>
				<Router>
					<Nav name={clanName} />
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							width: "100%",
							flex: 1,
							padding: 10,
						}}
					>
						<Routes>
							<Route element={<Home />} path="/" />
						</Routes>
					</div>
				</Router>
			</AuthProvider>
		</ThemeToggleProvider>
	);
}

export default App;
