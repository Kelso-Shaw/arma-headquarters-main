import { Grid } from "@mui/material";
import React from "react";
import HomeCards from "./HomeCards";

const ActionGroup = () => {
	return (
		<Grid container width={"80vw"} sx={{ marginTop: 0 }} spacing={2}>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
				sx={{ minHeight: "200px", maxHeight: "250px" }}
			>
				<HomeCards
					title="Join Us!"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et interdum justo, non tristique turpis. Sed ornare, nulla quis tempus placerat, ante magna fermentum eros, at vulputate arcu diam sed massa."
					linkRef="https://discord.com/invite/WQvnE3uVkH"
					buttonText="Enlist"
				/>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
				sx={{ minHeight: "200px", maxHeight: "250px" }}
			>
				<HomeCards
					title="Join Us!"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et interdum justo, non tristique turpis. Sed ornare, nulla quis tempus placerat, ante magna fermentum eros, at vulputate arcu diam sed massa."
					linkRef="https://discord.com/invite/WQvnE3uVkH"
					buttonText="Enlist"
				/>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
				sx={{ minHeight: "200px", maxHeight: "250px" }}
			>
				<HomeCards
					title="Join Us!"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et interdum justo, non tristique turpis. Sed ornare, nulla quis tempus placerat, ante magna fermentum eros, at vulputate arcu diam sed massa."
					linkRef="https://discord.com/invite/WQvnE3uVkH"
					buttonText="Enlist"
				/>
			</Grid>
		</Grid>
	);
};

export default ActionGroup;
