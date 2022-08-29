import {
	Button,
	Grid,
	Paper,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useState } from "react";
import aboutMeDescriptions from "../data/aboutme";

export function AboutMeSection() {
	const theme = useTheme();
	const screenLessThanSM = useMediaQuery(theme.breakpoints.down("sm"));

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
				sx={{
					width: "100%",
					padding: screenLessThanSM ? "0 1rem" : "0 3rem",
					marginTop: "1rem",
				}}
			>
				<Paper
					elevation={24}
					sx={{
						width: "100%",
						height: "100%",
						padding: screenLessThanSM ? "1rem" : "3rem",
						display: "flex",
						flexDirection: "column",
						gap: screenLessThanSM ? "1rem" : "3rem",
					}}
				>
					{Object.keys(currentDescriptionTextObject).map(key => (
						<Typography
							key={key}
							sx={{
								fontFamily: "Concert One, sans-serif",
								fontSize: screenLessThanSM
									? "inherit"
									: "1.25rem",
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
