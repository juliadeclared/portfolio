import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./utils/Theme";
import App from "./App";
// import Box from "../src/components/Box"
import { ContextProvider } from "../src/utils/Context";
// import Store from "./utils/Store"
// import Navbar from "./components/Navbar"

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ContextProvider>
				<App />
			</ContextProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
