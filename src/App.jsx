import React from "react"
import { CssBaseline, Grid, Stack, Typography, Box, Button } from "@mui/material"
import bgDesktop from "./assets/images/image-product-desktop.jpg"
import bgMobile from "./assets/images/image-product-mobile.jpg"

const App = () => {
	return (
		<>
			<CssBaseline />
			<Grid container direction="row" xs={12}>
				<Grid container item direction="colum" justifyContent="center" alignItems="center" sx={{ marginTop: "150px" }}>
					<Grid container item direction="row" sx={{ width: "600px", height: "456.4px" }}>
						<Grid item xs={12} md={6} sx={{ border: "1px solid black" }}>
							<Box component="img" src={bgDesktop} width="300px" height="100%" />
						</Grid>
						<Grid container item xs={12} md={6} sx={{ padding: "10px 20px 10px 20px", border: "1px solid black" }}>
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
		</>
	)
}

export default App
