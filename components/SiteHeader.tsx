import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/SiteHeader.module.css";

const SiteHeader = ({ nav }: { nav: boolean }) => {
	return (
		<div className={styles.header}>
			<Link href="/" className={styles.logoLink}>
				<div className={styles.logoContainer}>
					<Image
						alt="Website Logo"
						src="/saturn.png"
						width={80}
						height={80}
						className={styles.logoBw}
					/>
					<Image
						alt="Website Logo"
						src="/saturn_color.png"
						width={80}
						height={80}
						className={styles.logoColor}
					/>
				</div>
			</Link>
			{nav && (
				<nav className={styles.nav}>
					<Link className={styles.navLink} href="/about">
						About
					</Link>
				</nav>
			)}
		</div>
	);
};

export default SiteHeader;
