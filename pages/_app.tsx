import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import Head from "../components/Head";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	console.log(router.asPath);
	return (
		<>
			<Head nav={router.asPath == "/"} />
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}

export default MyApp;
