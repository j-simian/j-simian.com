"use client";
import React from "react";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Head.module.css";

const Head = ({ nav }: { nav: boolean }) => {
	const [opacity, setOpacity] = useState(0.0);
	return (
		<div
			style={{
				width: "90vw",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<div
				onClick={(_) => Router.push("/")}
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					position: "relative",
					width: "100px"
				}}
			>
				<div style={{ gridColumn: 1, gridRow: 1, zIndex: 1, width: "100px", height: "100px" }}>
					<Image
						alt="Website Logo"
						onMouseEnter={(_) => {
							setOpacity(1.0);
						}}
						onMouseLeave={(_) => {
							setOpacity(0.0);
						}}
						src="/saturn_color.png"
						width={100}
						height={100}
						style={{
							opacity: opacity,
							position: "absolute",
							top: "0px",
							left: "0px",
							transition: "opacity 0.5s ease",
						}}
					/>
				</div>
				<div style={{ gridColumn: 1, gridRow: 1, zIndex: 0, width: "100px", height: "100px" }}>
					<Image
						alt="Website Logo"
						src="/saturn.png"
						width={100}
						height={100}
						style={{
							opacity: 1.0 - opacity,
							position: "absolute",
							top: "0px",
							transition: "opacity 0.5s ease",
						}}
					/>
				</div>
			</div>
			{nav ? (
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "end",
						maxWidth: "250px",
					}}
				>
					<Link
						className={styles.nav_link}
						href="/about"
						style={{ textAlign: "right" }}
					>
						About
					</Link>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Head;
