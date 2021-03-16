import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./utils/Theme";
import App from "./App";
import { ContextProvider } from "./utils/Context";

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
