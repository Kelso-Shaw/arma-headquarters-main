import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { FormButton } from "../buttons/FormButton";

const LoginForm = ({ handleClose, registerButton }) => {
	const { auth, login, register } = useAuth();
	const [username, setName] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.isAuthenticated) {
			navigate("/");
		}
	}, [auth, navigate]);

	if (auth.loading || auth.isAuthenticated) {
		return;
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		const result = registerButton
			? await register(username, password)
			: await login(username, password);
		if (!result.success) {
			return;
		}
		handleClose();
		navigate("/");
	};

	return (
		<Paper
			sx={{
				padding: 5,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "primary.accent" }}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					{registerButton ? "Register" : "Sign-In"}
				</Typography>
				<Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						name="username"
						label="Username"
						autoComplete="username"
						value={username}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						type="password"
						label="Password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<FormButton registerButton={registerButton} />
				</Box>
			</Box>
		</Paper>
	);
};

export default LoginForm;
