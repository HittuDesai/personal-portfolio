import {
	Button,
	Grid,
	Paper,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function Footer() {
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
				<Typography
					variant="overline"
					fontSize="large"
					sx={{
						fontFamily: "Concert One, sans-serif",
						marginTop: "3rem",
					}}
				>
					Get in Touch!
				</Typography>
			</Grid>
			{/* <Grid
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
			</Grid> */}
		</Grid>
	);
}
