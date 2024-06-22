import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { Login } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import ThemeButton from "./buttons/ThemeButton";
import Dialog from "@mui/material/Dialog";
import LoginForm from "./forms/LoginForm";

function Nav({ name, settings }) {
	const [registerButton, setRegister] = useState(false);
	const { auth } = useAuth();
	const [drawerOpen, setDrawerOpen] = useState(false);
	const navigate = useNavigate();

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setDrawerOpen(open);
	};

	const { logout } = useAuth();
	const handleLogout = () => {
		logout();
		navigate("/");
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	console.log(settings);

	const drawerList = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				<ListItemButton onClick={() => navigate("/")}>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItemButton>
				{auth.isAuthenticated ? (
					<>
						<ListItemButton onClick={() => navigate("/profile")}>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary="Profile" />
						</ListItemButton>
						<ListItemButton
							sx={{
								position: "fixed",
								bottom: 0,
								width: 250,
							}}
							onClick={handleLogout}
						>
							<ListItemIcon>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary="Logout" />
						</ListItemButton>
					</>
				) : (
					<>
						{settings.map((setting) => {
							if (setting.setting === "Registering" && setting.status === 1) {
								return (
									<ListItemButton
										key={setting.id}
										sx={{
											position: "fixed",
											bottom: 50,
											width: 250,
										}}
										onClick={() => {
											handleClickOpen();
											setRegister(true);
										}}
									>
										<ListItemIcon>
											<Login />
										</ListItemIcon>
										<ListItemText primary="Register" />
									</ListItemButton>
								);
							}
							return;
						})}

						<ListItemButton
							sx={{
								position: "fixed",
								bottom: 0,
								width: 250,
							}}
							onClick={() => {
								handleClickOpen();
								setRegister(false);
							}}
						>
							<ListItemIcon>
								<Login />
							</ListItemIcon>
							<ListItemText primary="Login" />
						</ListItemButton>
					</>
				)}
			</List>
		</Box>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						color="text.title"
						sx={{ cursor: "pointer" }}
						onClick={() => navigate("/")}
					>
						{name}
					</Typography>
					<Container sx={{ flexGrow: 1 }} />
					<ThemeButton />
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
				{drawerList()}
			</Drawer>
			<Dialog onClose={handleClose} open={open}>
				<LoginForm handleClose={handleClose} registerButton={registerButton} />
			</Dialog>
		</Box>
	);
}

export default Nav;
