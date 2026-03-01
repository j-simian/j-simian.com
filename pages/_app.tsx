import type { AppProps } from "next/app";
import SiteHeader from "../components/SiteHeader";
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
		<div className="site-wrapper">
			<SiteHeader nav={navPages.includes(router.asPath)} />
			<main className="site-main">
				<Component {...pageProps} />
			</main>
			<Analytics />
			<SpeedInsights />
		</div>
	);
}

export default MyApp;
