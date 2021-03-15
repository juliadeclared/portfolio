import { createMuiTheme, fade } from "@material-ui/core/styles";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#F6A400",
		},
		secondary: {
			main: "#FBDB9E",
		},
		background: {
			default: "#FEF5E4",
		},
	},
	typography: {
		h1: {
			fontFamily: "Changa One",
			marginBottom: 5,
		},
		h2: {
			fontFamily: "Changa One",
		},
		h3: {
			fontFamily: "Jost",
		},
		h4: {
			fontFamily: "Jost",
		},
		h5: {
			fontFamily: "Jost",
			fontWeight: 600,
		},
		h6: {
			fontFamily: "Jost",
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
				marginLeft: 20,
				marginRight: 20,
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
				padding: "8%",
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
