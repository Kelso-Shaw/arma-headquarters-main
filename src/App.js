import React, { useCallback, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import { ThemeToggleProvider } from "./ThemeContext";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import { getSettings } from "./components/funcs/common/getSettings";
import Footer from "./components/Footer";
import { Box, padding } from "@mui/system";

function App() {
	const [settings, setSettings] = useState([]);
	const clanName = process.env.REACT_APP_CLAN_NAME;
	const handleSettings = useCallback(async () => {
		const data = await getSettings();
		setSettings(data);
	}, []);

	useEffect(() => {
		handleSettings();
	}, [handleSettings]);

	return (
		<ThemeToggleProvider>
			<AuthProvider>
				<Router>
					<Nav name={clanName} settings={settings} />
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							minHeight: "100vh",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Routes>
							<Route element={<Home />} path="/" />
						</Routes>
					</Box>
					<Footer />
				</Router>
			</AuthProvider>
		</ThemeToggleProvider>
	);
}

export default App;
