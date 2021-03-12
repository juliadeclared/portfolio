import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Box from "../src/components/Box"
import { ContextProvider } from "../src/utils/Context";
// import Navbar from "./components/Navbar"

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
