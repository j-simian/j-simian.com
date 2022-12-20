import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
