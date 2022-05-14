import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";

export const AppWrapper = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
