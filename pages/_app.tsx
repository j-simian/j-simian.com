import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import Head from "../components/Head";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { initialiseFirebase } from "../lib/libFirebase";

export const { app: firebaseApp, storage: firebaseStorage } =
	initialiseFirebase();

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<>
			<Head nav={router.asPath == "/"} />
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}

export default MyApp;
