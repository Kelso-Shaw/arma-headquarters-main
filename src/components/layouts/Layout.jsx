import { Container } from "@mui/material";
import React from "react";
import { AddButtonTable } from "../buttons/AddButtonTable";

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
