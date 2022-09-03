import React from "react";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
	SiMaterialui,
	SiHtml5,
	SiCss3,
	SiNextdotjs,
	SiFirebase,
	SiPhp,
	SiDjango,
	SiPython,
	SiStripe,
	SiGithub,
	SiReact,
	SiJavascript,
} from "react-icons/si";

export function ProjectCard({ repoData }) {
	const { forks, watchers, website, commits, topics } = repoData;
	return (
		<Paper elevation={24} sx={{ padding: "1rem" }}>
			<Grid container flexDirection="column">
				<Typography variant="h6">{repoData.name}</Typography>
				<Typography variant="caption" sx={{ minHeight: "4rem" }}>
					{repoData.description}
				</Typography>
				<Typography variant="body2" component="div">
					<Grid
						container
						flexDirection="row"
						alignItems="center"
						gap="0.5rem"
					>
						Tech:{" "}
						{topics.map((topic, index) => {
							switch (topic) {
								case "javascript":
									return (
										<React.Fragment key={index}>
											<SiJavascript />
										</React.Fragment>
									);
								case "js":
									return (
										<React.Fragment key={index}>
											<SiJavascript />
										</React.Fragment>
									);
								case "reactjs":
									return (
										<React.Fragment key={index}>
											<SiReact />
										</React.Fragment>
									);
								case "material-ui":
									return (
										<React.Fragment key={index}>
											<SiMaterialui />
										</React.Fragment>
									);
								case "html":
									return (
										<React.Fragment key={index}>
											<SiHtml5 />
										</React.Fragment>
									);
								case "css":
									return (
										<React.Fragment key={index}>
											<SiCss3 />
										</React.Fragment>
									);
								case "nextjs":
									return (
										<React.Fragment key={index}>
											<SiNextdotjs />
										</React.Fragment>
									);
								case "firebase":
									return (
										<React.Fragment key={index}>
											<SiFirebase />
										</React.Fragment>
									);
								case "php":
									return (
										<React.Fragment key={index}>
											<SiPhp />
										</React.Fragment>
									);
								case "django":
									return (
										<React.Fragment key={index}>
											<SiDjango />
										</React.Fragment>
									);
								case "python":
									return (
										<React.Fragment key={index}>
											<SiPython />
										</React.Fragment>
									);
								case "stripe":
									return (
										<React.Fragment key={index}>
											<SiStripe />
										</React.Fragment>
									);
								case "github":
									return (
										<React.Fragment key={index}>
											<SiGithub />
										</React.Fragment>
									);
								default:
									return;
							}
						})}
					</Grid>
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
						<Typography variant="overline">
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
						<Typography variant="overline">
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
