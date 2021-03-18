import { createMuiTheme, fade } from "@material-ui/core/styles";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#F8CA45",
		},
		secondary: {
			main: "#f4acb7",
		},
		background: {
			default: "#FEF5E4",
		},
	},
	typography: {
		h1: {
			fontFamily: "Sacramento",
			marginBottom: 5,
		},
		h2: {
			fontFamily: "Sacramento",
		},
		h3: {
			fontFamily: "Josefin Slab",
		},
		h4: {
			fontFamily: "Josefin Slab",
		},
		h5: {
			fontFamily: "Josefin Slab",
			fontWeight: 600,
		},
		h6: {
			fontFamily: "Josefin Slab",
		},
	},
	overrides: {
		MuiButton: {
			root: {
				borderRadius: 50,
				minWidth: 160,
				height: 40,
				marginTop: 10,
				marginBottom: 10,
				marginLeft: 10,
				marginRight: 10,
				fontWeight: "bold",
				fontSize: 16,
			},
			containedPrimary: {
				color: "#FFFFFF",
			},
		},
		MuiDialog: {
			paper: {
				borderRadius: 20,
				opacity: "80%",
				padding: "5%",
				paddingTop: "5%",
				paddingBottom: "5%",
			},
		},
		MuiPaper: {
			root: {
				opacity: fade("#FFFFFF", 0.7),
			},
		},
		MuiFormControl: {
			root: {
				margin: "normal",
			},
		},
	},
	props: {
		MuiButton: {
			variant: "contained",
			color: "primary",
		},
		MuiTextField: {
			variant: "outlined",
			size: "small",
			margin: "dense",
		},
	},
});
