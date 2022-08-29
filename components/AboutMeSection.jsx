import { Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import aboutMeDescriptions from "../data/aboutme";

export function AboutMeSection() {
	const [currentDescription, setCurrentDescription] = useState(1);
	const currentDescriptionTextObject =
		aboutMeDescriptions[currentDescription];

	const aboutMeNavigationTexts = ["TL;DR", "Default", "More"];
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
				fontFamily: "Concert One, sans-serif",
				letterSpacing: "0.25rem",
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
				sx={{ width: "100%", padding: "0 3rem", marginTop: "1rem" }}
			>
				<Paper
					elevation={24}
					sx={{
						width: "100%",
						height: "100%",
						padding: "3rem",
						display: "flex",
						flexDirection: "column",
						gap: "3rem",
					}}
				>
					{Object.keys(currentDescriptionTextObject).map(key => (
						<Typography
							key={key}
							sx={{
								fontFamily: "Concert One, sans-serif",
								fontSize: "1.25rem",
							}}
						>
							{currentDescriptionTextObject[key]}
						</Typography>
					))}
				</Paper>
			</Grid>
		</Grid>
	);
}
