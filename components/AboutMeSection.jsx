import { Button, Grid, Paper } from "@mui/material";
import { useState } from "react";

export function AboutMeSection() {
	const [currentDescription, setCurrentDescription] = useState(2);

	const aboutMeNavigationTexts = ["TL;DR", "Less", "Default", "More"];
	const CustomButton = ({ buttonText, value }) => (
		<Button
			variant="text"
			color="inherit"
			onClick={() => setCurrentDescription(value)}
			sx={{
				padding: "1rem",
				border:
					value === currentDescription
						? "2px solid whitesmoke"
						: "none",
				borderRadius: "1rem",
			}}
		>
			{buttonText}
		</Button>
	);
	const AboutMeNavigation = () => (
		<>
			{aboutMeNavigationTexts.map((buttonText, index) => (
				<CustomButton
					key={index}
					buttonText={buttonText}
					value={index}
				/>
			))}
		</>
	);
	return (
		<Grid
			container
			flexDirection="column"
			alignItems="center"
			sx={{ width: "100%", height: "100%" }}
		>
			<Grid
				item
				container
				flexDirection="row"
				alignItems="center"
				justifyContent="space-evenly"
				sx={{ width: "100%" }}
			>
				<AboutMeNavigation />
			</Grid>
			<Grid
				item
				flex={1}
				sx={{ width: "100%", padding: "0 3rem", marginTop: "1rem" }}
			>
				<Paper
					elevation={24}
					sx={{ width: "100%", height: "100%", padding: "1rem" }}
				>
					fns
				</Paper>
			</Grid>
		</Grid>
	);
}
