import Head from "next/head";
import { AboutMeSection } from "../components/AboutMeSection";

export default function Home() {
	return (
		<>
			<Head>
				<title>Hitarth Desai</title>
				<meta
					name="description"
					content="Personal Portfolio of Hitarth Desai"
				/>
			</Head>
			<AboutMeSection />
		</>
	);
}
