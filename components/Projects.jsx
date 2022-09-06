import { Grid, Typography } from "@mui/material";
import { ProjectCard } from "./ProjectCard";

export function Projects({ reposArray }) {
	let hostedProjects = [];
	let unhostedProjects = [];
	for (const repo of reposArray) {
		if (repo.website) hostedProjects.push(repo);
		else unhostedProjects.push(repo);
	}
	console.log({ hostedProjects, unhostedProjects });
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
					Highlighted Projects
				</Typography>
			</Grid>
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				sx={{
					width: "100%",
					padding: "1rem",
				}}
				gap="1rem"
			>
				{hostedProjects?.map((repoData, index) => (
					<Grid
						key={index}
						item
						flex={1}
						xl={2}
						lg={3}
						md={4}
						sm={6}
						xs={12}
						sx={{ maxHeight: "15rem" }}
					>
						<ProjectCard repoData={repoData} />
					</Grid>
				))}
			</Grid>
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
					Other Projects
				</Typography>
			</Grid>
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				sx={{
					width: "100%",
					padding: "1rem",
				}}
				gap="1rem"
			>
				{unhostedProjects?.map((repoData, index) => (
					<Grid
						key={index}
						item
						flex={1}
						xl={2}
						lg={3}
						md={4}
						sm={6}
						xs={12}
						sx={{ maxHeight: "15rem" }}
					>
						<ProjectCard repoData={repoData} />
					</Grid>
				))}
			</Grid>
		</Grid>
	);
}
