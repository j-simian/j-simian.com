"use client";
import React from "react";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";

const Head = () => {
	const [t, setT] = useState(0.0);
	return (
		<div
			onClick={(_) => Router.push("/")}
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(2, 1fr)",
				position: "relative",
			}}
		>
			<div style={{ gridColumn: 1, gridRow: 1, zIndex: 1 }}>
				<Image
					onMouseEnter={(_) => {
						setT(1.0);
					}}
					onMouseLeave={(_) => {
						setT(0.0);
					}}
					src="/saturn_color.png"
					width="100px"
					height="100px"
					style={{
						opacity: t,
						position: "absolute",
						top: "0px",
						left: "0px",
						transition: "opacity 0.5s ease",
					}}
				/>
			</div>
			<div style={{ gridColumn: 1, gridRow: 1, zIndex: 0 }}>
				<Image
					src="/saturn.png"
					width="100px"
					height="100px"
					style={{
						opacity: 1.0 - t,
						position: "absolute",
						top: "0px",
						left: "-100px",
						transition: "opacity 0.5s ease",
					}}
				/>
			</div>
		</div>
	);
};

export default Head;
