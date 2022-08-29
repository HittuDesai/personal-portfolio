import { NavBar } from "../components/NavBar";
import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Head from "next/head";

function App({ Component, pageProps }) {
	const darkTheme = createTheme({
		palette: {
			mode: "dark",
		},
	});

	return (
		<>
			<Head>
				<title>Hitarth Desai</title>
				<meta
					name="description"
					content="Personal Portfolio of Hitarth Desai"
				/>
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');
				</style>
			</Head>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Grid
					container
					flexDirection="column"
					sx={{ minHeight: "100vh" }}
				>
					<Grid item>
						<NavBar />
					</Grid>
					<Grid item flex={1}>
						<Component {...pageProps} />
					</Grid>
				</Grid>
			</ThemeProvider>
		</>
	);
}

export default App;
