import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "../components/Head";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head />
		</div>
	);
};

export default Home;
