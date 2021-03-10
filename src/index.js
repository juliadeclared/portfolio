import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextProvider from "../src/utils/Context";
// import Navbar from "./components/Navbar"

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
		{/* <Navbar /> */}
	</React.StrictMode>,
	document.getElementById("root")
);
