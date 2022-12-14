const { Octokit } = require("@octokit/core");
import { AboutMeSection } from "../components/AboutMeSection";
import { Footer } from "../components/Footer";
import { Projects } from "../components/Projects";

export default function Home({ reposArray }) {
	return (
		<>
			<AboutMeSection />
			<Projects reposArray={reposArray} />
			<Footer />
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
		const {
			name,
			forks,
			watchers,
			description,
			homepage,
			languages_url,
			contributors_url,
		} = repo;
		const newRepoData = {
			name,
			forks,
			watchers,
			description,
			website: homepage,
		};
		const languagesData = await octokit.request({
			method: "GET",
			url: languages_url,
		});
		newRepoData["languages"] = Object.keys(languagesData.data);

		const contributorsData = await octokit.request({
			method: "GET",
			url: contributors_url,
		});
		const adminObject = contributorsData.data.filter(
			contributorObject => contributorObject.login === "HittuDesai"
		);
		newRepoData["commits"] = adminObject[0].contributions;
		newRepoData["topics"] = repo.topics;
		newReposArray.push(newRepoData);
	}
	return {
		props: {
			reposArray: newReposArray,
		},
	};
}
