import { Button, Typography } from "@mui/material";
import React from "react";

export const FormButton = ({ registerButton }) => {
	return (
		<Button
			type="submit"
			fullWidth
			variant="contained"
			sx={{
				mt: 3,
				mb: 2,
			}}
		>
			<Typography>{registerButton ? "Register" : "Sign-In"}</Typography>
		</Button>
	);
};
