import React from "react";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SiMaterialui, SiHtml5 } from "react-icons/si";

export function ProjectCard({ repoData }) {
	const { forks, watchers, website, commits, topics } = repoData;
	return (
		<Paper elevation={24} sx={{ padding: "1rem" }}>
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
						{topics.map((topic, index) => {
							if (topic === "material-ui")
								return (
									<React.Fragment key={index}>
										<SiMaterialui />
									</React.Fragment>
								);
						})}
					</>
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					{(forks !== 0 || watchers !== 0 || commits !== 0) && (
						<Typography variant="caption">
							{forks !== 0 && (
								<span style={{ marginRight: "0.5rem" }}>
									{forks} Forks,
								</span>
							)}
							{watchers !== 0 && (
								<span style={{ marginRight: "0.5rem" }}>
									{watchers} Watchers,
								</span>
							)}
							{commits !== 0 && <span>{commits} Commits</span>}
						</Typography>
					)}
					{website && (
						<Typography variant="caption">
							<Grid
								container
								flexDirection="row"
								alignItems="center"
							>
								<span style={{ marginRight: "0.5rem" }}>
									Check it out
								</span>
								<Link href={website} target="_blank">
									<OpenInNewIcon />
								</Link>
							</Grid>
						</Typography>
					)}
				</Box>
			</Grid>
		</Paper>
	);
}
