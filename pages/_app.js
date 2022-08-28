import { NavBar } from "../components/NavBar";
import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";

function App({ Component, pageProps }) {
	const darkTheme = createTheme({
		palette: {
			mode: "dark",
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Grid container flexDirection="column" sx={{ height: "100vh" }}>
				<Grid item>
					<NavBar />
				</Grid>
				<Grid item flex={1}>
					<Component {...pageProps} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
