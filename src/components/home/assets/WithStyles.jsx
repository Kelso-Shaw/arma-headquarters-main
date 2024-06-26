import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const WithStyles = ({ image, headline, description }) => (
	<Card>
		<CardMedia component="img" height="140" image={image} alt={headline} />
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				{headline}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{description}
			</Typography>
		</CardContent>
	</Card>
);

export default WithStyles;
