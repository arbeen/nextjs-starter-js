import React from "react";
import { AppButton } from "@/components/AppButton";
import Image from "next/image";
import { VercelLogo } from "@/assets";

const HomePage = () => {
	return (
		<div className="container mx-auto px-4">
			<Image src={VercelLogo} alt="vercel" />
			<p>Homepage</p>
			<AppButton
				label="Hello World"
				onClick={() => {
					console.log("hello");
				}}
			/>
		</div>
	);
};

export default HomePage;
