import React, { useContext, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

export const AppContext = React.createContext({});

export function useStore() {
	return useContext(AppContext);
}

export function ContextProvider({ children }) {
	const [openAbout, setOpenAbout] = useState(false);
	const [openStack, setOpenStack] = useState(false);
	const [openProjects, setOpenProjects] = useState(false);
	const [openContact, setOpenContact] = useState(false);

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	const value = {
		openAbout,
		openStack,
		openProjects,
		openContact,
		setOpenAbout,
		setOpenStack,
		setOpenProjects,
		setOpenContact,
		matches,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
