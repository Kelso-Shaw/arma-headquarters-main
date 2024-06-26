import React from "react";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

const HomeCards = ({ title, text, link, buttonText, linkRef }) => {
	return (
		<>
			<Card
				variant="outlined"
				sx={{
					minHeight: "200px",
					maxHeight: "500px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					textAlign: "center",
					padding: 1,
					borderRadius: 5,
					marginBottom: 1.2,
					paddingBottom: 2,
				}}
			>
				<div>
					<h3>{title}</h3>
					<p>{text}</p>
				</div>
				{linkRef ? (
					<a href={linkRef} target="_blank" rel="noopener noreferrer">
						<Button>{buttonText}</Button>
					</a>
				) : (
					<Link to={link}>
						<Button>{buttonText}</Button>
					</Link>
				)}
			</Card>
		</>
	);
};

export default HomeCards;
