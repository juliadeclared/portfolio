import React, { useContext, useState } from "react";

export const AppContext = React.createContext({});

export function useStore() {
	return useContext(AppContext);
}

export function ContextProvider({ children }) {
	const [openAbout, setOpenAbout] = useState(false);
	const [openStack, setOpenStack] = useState(false);
	const [openProjects, setOpenProjects] = useState(false);

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
