import { GetStaticPaths, GetStaticProps } from "next";
import { DispatchWithoutAction } from "react";
import { useState } from "react";
import { getLexicon } from "../../../lib/libFirebase";
import { firebaseStorage } from "../../_app";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const language = params!.name;
	const lexicon = await getLexicon(firebaseStorage, language as string);
	return { props: { language, lexicon } };
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { name: "fasil" } }],
		fallback: "blocking",
	};
};

export type Word = {
	definition: string[];
	type: wordType;
};

type wordType = "adj" | "adv" | "v" | "n" | "prep" | "";

const diacriticMap = {
	"◌̄": "",
	ā: "a",
	ē: "e",
	ī: "i",
	ō: "o",
	ū: "u",
};

const Language = ({
	language,
	lexicon,
}: {
	language: string;
	lexicon: any;
}) => {
	const [posFilter, setPos] = useState<wordType>("");
	const [search, setSearch] = useState("");
	const [def, setDef] = useState("");

	return (
		<>
			<h1>
				{language
					.split("")
					.map((x: string, i: number) =>
						i == 0 ? x.toUpperCase() : x
					)
					.join("")}{" "}
				Lexicon
			</h1>
			<p>
				<input
					style={{ marginRight: "1rem" }}
					type="text"
					value={search}
					onChange={(e) => setSearch(e.currentTarget.value)}
				/>
				<select
					style={{ marginRight: "1rem" }}
					value={posFilter}
					onChange={(e) => setPos(e.currentTarget.value as wordType)}
				>
					<option value="">All</option>
					<option value="adj">Adjectives</option>
					<option value="adv">Adverbs</option>
					<option value="n">Nouns</option>
					<option value="prep">Prepositions</option>
					<option value="v">Verbs</option>
				</select>
				<input
					style={{ marginRight: "1rem" }}
					type="text"
					value={def}
					onChange={(e) => setDef(e.currentTarget.value)}
				/>
			</p>
			<div
				style={{
					position: "relative",
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
					maxWidth: "36rem",
					margin: "1rem auto 1rem",
				}}
			>
				{Object.getOwnPropertyNames(lexicon)
					// Filter to correct part of speech
					.filter((x: string) =>
						posFilter == ""
							? true
							: lexicon[x].type == (posFilter as string)
					)
					// Filter to search (Fasil)
					.filter((x: string) =>
						search == ""
							? true
							: x
									.split("")
									.map((c: string) => 
										Object.keys(diacriticMap).includes(c)
											? diacriticMap[
													c as keyof typeof diacriticMap
											  ]
											: c
									)
									.join("")
									.startsWith(search)
					)
					// Filter to search (English definition)
					.filter((x: string) =>
						def == ""
							? true
							: lexicon[x].definition.some(
									(x: string) => x.match(def) != null
							  )
					)
					.map((x: string) => (
						<p
							style={{
								position: "relative",
								marginLeft: 0,
								marginRight: 0,
								marginTop: 0,
								marginBottom: "1.2rem",
								height: "min-content",
								width: "min-content",
							}}
						>
							<span
								style={{
									position: "absolute",
									width: "max-content",
									left: "0rem",
									display: "inline-block",
								}}
							>
								{x}
							</span>
							<span
								style={{
									position: "absolute",
									left: "6rem",
									fontStyle: "italic",
									width: "max-content",
									display: "inline-block",
								}}
							>
								- {lexicon[x].type}.
							</span>
							<span
								style={{
									position: "absolute",
									left: "9.5rem",
									display: "inline-block",
									paddingBottom: "1rem",
									width: "max-content",
									wordBreak: "break-all",
								}}
							>
								- {lexicon[x].definition.join("; ")}
							</span>
						</p>
					))}
			</div>
		</>
	);
};

export default Language;
