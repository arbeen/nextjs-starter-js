import Head from "next/head";
import HomePage from "../src/containers/HomePage";
import { AppWrapper } from "../src/layout/AppWrapper";

export default function Home() {
	return (
		<AppWrapper>
			<Head>
				<title>Homepage | CryptoPhd</title>
				<meta name="description" content="CryptoPhd" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<HomePage />
			</main>
		</AppWrapper>
	);
}
