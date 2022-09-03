import { Grid, Paper, Typography } from "@mui/material";
import UsbIcon from "@mui/icons-material/Usb";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";

export function ProjectCard({ repoData }) {
	return (
		<Paper elevation={24}>
			<Grid container flexDirection="column">
				<Typography variant="overline" fontSize="small">
					{repoData.name}
				</Typography>
				<Typography variant="caption" sx={{ minHeight: "4rem" }}>
					{repoData.description}
				</Typography>
				<Typography variant="caption">
					Tech:{" "}
					<>
						{repoData.languages.map((language, index) => (
							<React.Fragment key={index}>
								{language}
							</React.Fragment>
						))}
					</>
				</Typography>
				<Grid
					container
					flexDirection="row"
					alignItems="center"
					justifyContent="space-evenly"
				>
					<Grid
						item
						container
						flexDirection="row"
						alignItems="center"
						justifyContent="center"
					>
						<UsbIcon />
						<p>{repoData.forks}</p>
					</Grid>
					<Grid
						item
						container
						flexDirection="row"
						alignItems="center"
						justifyContent="center"
					>
						<VisibilityIcon />
						<p>{repoData.watchers}</p>
					</Grid>
					<Grid
						item
						container
						flexDirection="row"
						alignItems="center"
						justifyContent="center"
					>
						{repoData?.website?.trim().length > 0 && (
							<a href={repoData.website} target="_blank">
								<OpenInNewIcon />
							</a>
						)}
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
}
