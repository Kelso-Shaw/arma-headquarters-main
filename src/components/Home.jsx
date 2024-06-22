import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
	Avatar,
	Box,
	Container,
	CssBaseline,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FormButton } from "./buttons/FormButton";

const Home = () => {
	const [username, setName] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Paper
				sx={{
					marginTop: 10,
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
					<Avatar sx={{ m: 1 }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign In
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }}>
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
						<FormButton />
						<Grid container>
							<Grid item xs sx={{ display: "flex", justifyContent: "center" }}>
								<Link
									variant="body2"
									style={{ justifyContent: "center" }}
									color=""
								>
									Forgot password?
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Paper>
		</Container>
	);
};

export default Home;
