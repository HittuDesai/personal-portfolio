const { Octokit } = require("@octokit/core");
import { useEffect } from "react";
import { AboutMeSection } from "../components/AboutMeSection";
import { Projects } from "../components/Projects";

export default function Home({ reposArray }) {
	return (
		<>
			<AboutMeSection />
			<Projects reposArray={reposArray} />
		</>
	);
}

export async function getStaticProps() {
	const octokit = new Octokit({
		auth: "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",
		baseUrl: "",
	});
	const response = await octokit.request({
		method: "GET",
		url: "https://api.github.com/users/HittuDesai/repos",
	});
	const repos = response.data;
	let newReposArray = [];
	for (const repo of repos) {
		const { name, forks, watchers, description, homepage } = repo;
		const newRepoData = {
			name,
			forks,
			watchers,
			description,
			website: homepage,
		};
		const languagesURL = repo.languages_url;
		const languagesData = await octokit.request({
			method: "GET",
			url: languagesURL,
		});
		newRepoData["languages"] = Object.keys(languagesData.data);
		newReposArray.push(newRepoData);
	}
	return {
		props: {
			reposArray: newReposArray,
		},
	};
}
