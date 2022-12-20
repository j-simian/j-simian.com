import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import Head from "../components/Head";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head />
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}

export default MyApp;
