import Head from "next/head";
import AboutPage from "@/containers/AboutPage";
import { AppWrapper } from "@/layout/AppWrapper";

export default function About() {
	return (
		<AppWrapper>
			<Head>
				<title>About | CryptoPhd</title>
				<meta name="description" content="CryptoPhd" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<AboutPage />
			</main>
		</AppWrapper>
	);
}
