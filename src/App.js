import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import { AuthProvider } from "./components/AuthContext";
import { ThemeToggleProvider } from "./ThemeContext";

function App() {
	return (
		<ThemeToggleProvider>
			<AuthProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</AuthProvider>
		</ThemeToggleProvider>
	);
}

export default App;
