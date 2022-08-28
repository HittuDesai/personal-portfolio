import {
	AppBar,
	Collapse,
	IconButton,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export function NavBar() {
	const theme = useTheme();
	const screenLessThanSM = useMediaQuery(theme.breakpoints.down("sm"));
	const [expandMenu, setExpandMenu] = useState(false);

	const menuItemTexts = ["About Me", "My Projects", "Contact Me"];
	const NavigationMenuItem = ({ menuItemText }) => (
		<Typography
			align="center"
			onClick={() => console.log(menuItemText)}
			sx={{ width: "100%", padding: "1rem", border: "1px solid red" }}
		>
			{menuItemText}
		</Typography>
	);
	const NavigationMenuItems = () => (
		<>
			{menuItemTexts.map((menuItemText, index) => (
				<NavigationMenuItem key={index} menuItemText={menuItemText} />
			))}
		</>
	);

	return (
		<AppBar>
			{screenLessThanSM ? (
				<>
					<Toolbar>
						<IconButton
							onClick={() =>
								setExpandMenu(previousValue => !previousValue)
							}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
					<Collapse in={expandMenu}>
						<NavigationMenuItems />
					</Collapse>
				</>
			) : (
				<Toolbar>
					<NavigationMenuItems />
				</Toolbar>
			)}
		</AppBar>
	);
}
