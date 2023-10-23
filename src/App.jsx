import React from "react"
import { CssBaseline, Grid, Stack, Typography, Box, Button, createTheme, ThemeProvider } from "@mui/material"
import bgDesktop from "./assets/images/image-product-desktop.jpg"
import bgMobile from "./assets/images/image-product-mobile.jpg"

const theme = createTheme({
	palette: {
		background: { default: "hsl(30, 38%, 92%)" },
	},
})

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid container direction="row" xs={12}>
				<Grid container item direction="colum" justifyContent="center" alignItems="center" sx={{ marginTop: { xs: "50px", md: "150px" } }}>
					<Grid container item direction="row" justifyContent="center" minWidth={"400px"} sx={{ width: { xs: "400px", md: "600px" }, height: { xs: "700px", md: "456.4px" } }}>
						<Grid item xs={12} md={6} sx={{ border: "1px solid black", height: { xs: "275px", md: "425px" } }}>
							<Box component="img" sx={{ content: { xs: `url(${bgMobile})`, md: `url(${bgDesktop})` }, width: { xs: "100%", md: "300px" }, height: "100%" }} />
						</Grid>
						<Grid container item xs={12} md={6} sx={{ padding: "10px 20px 10px 20px", border: "1px solid black", height: { xs: "425px" } }}>
							<Stack direction="column" justifyContent="space-evenly">
								<Typography>PERFUME</Typography>
								<Typography variant="h4">Gabriell Essence Eau De Parfum</Typography>
								<Typography variant="body2">A Floral, solar and voluptuos interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL</Typography>
								<Stack direction="row" alignItems="center">
									<Typography variant="h4" sx={{ marginRight: "20px" }}>
										$149.99
									</Typography>
									<Typography variant="body2" sx={{ textDecoration: "line-through" }}>
										$169.99
									</Typography>
								</Stack>
								<Button variant="outlined">Add to Cart</Button>
							</Stack>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
