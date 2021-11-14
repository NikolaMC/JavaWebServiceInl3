import React, {createContext, useState} from "react";

export const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
	const [globalUserToken, setGlobalUserToken] = useState("");
	const [authenticated, setAuthenticated] = useState(false);
    const [globalUsername, setGlobalUsername] = useState("");

	return (
		<div>
			<ApplicationContext.Provider value={{globalUserToken, setGlobalUserToken, authenticated, setAuthenticated, globalUsername, setGlobalUsername}}>{children}</ApplicationContext.Provider>
		</div>
	);
};

export default ApplicationProvider;