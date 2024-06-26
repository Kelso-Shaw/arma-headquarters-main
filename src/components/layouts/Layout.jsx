import { AppBar, Box, Container, Toolbar } from "@mui/material";
import React from "react";
import { AddButtonTable } from "../buttons/AddButtonTable";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Layout = ({ children, buttonName, buttonOnClick, hideButton = 0 }) => {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{hideButton ? (
				""
			) : (
				<AddButtonTable text={buttonName} onClick={buttonOnClick} />
			)}
			{children}
		</Container>
	);
};

export default Layout;
