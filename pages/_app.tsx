import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import Head from "../components/Head";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { initialiseFirebase } from "../lib/libFirebase";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const { app: firebaseApp, storage: firebaseStorage } =
	initialiseFirebase();

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const navPages = ["/", "/now", "/links", "/about", "/uses"];

	return (
		<>
			<Head nav={navPages.includes(router.asPath)} />
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}

export default MyApp;
