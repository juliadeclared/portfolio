import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

export function useStore() {
	return useContext(AppContext);
}

export function ContextProvider({ children }) {
	const [openAbout, setOpenAbout] = useState(false);
	const [openStack, setOpenStack] = useState(false);
	const [openProjects, setOpenProjects] = useState(false);
	const [active, setActive] = useState(false);
	const [message, setMessage] = useState("hola");

	const value = {
		openAbout,
		openStack,
		openProjects,
		setOpenAbout,
		setOpenStack,
		setOpenProjects
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
