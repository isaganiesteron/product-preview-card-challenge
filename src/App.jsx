import React from "react"
import { CssBaseline, Grid, Stack, Typography, Box, Button, createTheme, ThemeProvider } from "@mui/material"
import bgDesktop from "./assets/images/image-product-desktop.jpg"
import bgMobile from "./assets/images/image-product-mobile.jpg"
import iconCart from "./assets/images/icon-cart.svg"

const theme = createTheme({
	palette: {
		background: { default: "hsl(30, 38%, 92%)" },
	},
	typography: {
		fontFamily: ["Fraunces", "Montserrat"].join(","),
	},
})

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid container direction="row" xs={12}>
				<Grid container item direction="colum" justifyContent="center" alignItems="center" sx={{ marginTop: { xs: "50px", md: "150px" } }}>
					<Grid container item direction="row" justifyContent="center" minWidth={"375px"} sx={{ width: { xs: "375px", md: "600px" }, height: { xs: "700px", md: "456.4px" } }}>
						<Grid item xs={12} md={6} sx={{ height: { xs: "275px", md: "425px" } }}>
							<Box component="img" sx={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: { md: "20px" }, borderTopRightRadius: { xs: "20px", md: "0px" }, content: { xs: `url(${bgMobile})`, md: `url(${bgDesktop})` }, width: { xs: "100%", md: "300px" }, height: "100%" }} />
						</Grid>
						<Grid container item xs={12} md={6} sx={{ background: "white", borderBottomRightRadius: "20px", borderTopRightRadius: { md: "20px" }, borderBottomLeftRadius: { xs: "20px", md: "0px" }, padding: "10px 20px 10px 20px", height: { xs: "425px" } }}>
							<Stack direction="column" justifyContent="space-evenly">
								<Typography variant="body2" letterSpacing={5} sx={{ fontFamily: "Montserrat", fontWeight: 300 }}>
									PERFUME
								</Typography>
								<Typography variant="h4" sx={{ fontSize: "35px", color: "rgba(28,32,37,255)", fontFamily: "Fraunces", fontWeight: 700 }}>
									Gabriell Essence Eau De Parfum
								</Typography>
								<Typography variant="body2" sx={{ fontSize: "16px", fontFamily: "Montserrat", fontWeight: 400 }}>
									A Floral, solar and voluptuos interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL
								</Typography>
								<Stack direction="row" alignItems="center">
									<Typography variant="h4" sx={{ marginRight: "20px", color: "rgba(64,129,105,255)", fontFamily: "Fraunces", fontWeight: 800 }}>
										$149.99
									</Typography>
									<Typography variant="body2" sx={{ textDecoration: "line-through", fontFamily: "Montserrat", fontWeight: 300 }}>
										$169.99
									</Typography>
								</Stack>
								<Button variant="contained" sx={{ fontSize: "15px", textTransform: "none", height: "50px", borderRadius: "10px", backgroundColor: "rgba(61,129,104,255)", "&:hover": { backgroundColor: "rgba(26,64,49,255)" } }}>
									<Box component="img" src={iconCart} height={"15px"} sx={{ marginRight: "15px" }} /> Add to Cart
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
