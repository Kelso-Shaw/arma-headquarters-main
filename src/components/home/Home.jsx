import React from "react";
import Layout from "../layouts/Layout";
import ActionGroup from "./assets/ActionGroup";
import { Paper, Typography, Grid } from "@mui/material";

export const Home = () => {
	return (
		<Layout hideButton>
			<Grid container width={"80vw"} sx={{ marginTop: 0 }} spacing={2}>
				<Grid item>
					<Typography variant="h4" textAlign="center">
						{process.env.REACT_APP_CLAN_NAME}
					</Typography>
					<Paper
						container
						elevation={3}
						sx={{
							padding: 2,
							display: "flex",
							flexDirection: "column",
							maxHeight: "500px",
							overflow: "hidden",
							borderRadius: 5,
							marginTop: 1,
						}}
					>
						<Typography variant="body" textAlign="center" gutterBottom>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
							interdum justo, non tristique turpis. Sed ornare, nulla quis
							tempus placerat, ante magna fermentum eros, at vulputate arcu diam
							sed massa. Praesent id iaculis mauris. Proin ultricies, libero
							vitae luctus semper, mi nisi venenatis sem, eget lacinia neque
							massa in ante. Maecenas id felis congue, consectetur libero sed,
							efficitur diam. Donec laoreet dictum maximus. In imperdiet ligula
							at ultricies tempor. Aenean ac dui risus. Phasellus ullamcorper
							velit in mattis efficitur. Morbi rhoncus, tellus a interdum
							cursus, nibh est molestie orci, a ultrices massa justo at velit.
							In non semper nisi. Nulla molestie justo sed turpis maximus, in
							tincidunt libero posuere.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
			<ActionGroup />
		</Layout>
	);
};

export default Home;
