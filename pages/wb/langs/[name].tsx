import { GetStaticPaths, GetStaticProps } from "next";
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

const typeMap = {
	Adjectives: "adj" as wordType,
	Nouns: "n" as wordType,
	Verbs: "v" as wordType,
	Adverbs: "adv" as wordType,
	All: "" as wordType,
	Prepositions: "prep" as wordType,
};

type wordType = "adj" | "adv" | "v" | "n" | "prep" | "";

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
					value={posFilter}
					onChange={(e) =>
						setPos(
							typeMap[
								e.currentTarget.value as
									| "Adjectives"
									| "All"
									| "Adverbs"
									| "Nouns"
									| "Verbs"
									| "Prepositions"
							]
						)
					}
				>
					<option>All</option>
					<option>Nouns</option>
					<option>Verbs</option>
					<option>Adjectives</option>
					<option>Adverbs</option>
					<option>Prepositions</option>
				</select>
				<input
					style={{ marginLeft: "1rem", marginRight: "1rem" }}
					type="text"
					value={def}
					onChange={(e) => setDef(e.currentTarget.value)}
				/>
			</p>
			{Object.getOwnPropertyNames(lexicon)
				.filter((x: string) =>
					posFilter == ""
						? true
						: lexicon[x].type == (posFilter as string)
				)
				.filter((x: string) =>
					search == "" ? true : x.startsWith(search)
				)
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
							marginTop: 0,
							marginBottom: "1.2rem",
						}}
					>
						<span style={{ position: "absolute" }}>{x}</span>
						<span
							style={{
								position: "absolute",
								left: "6rem",
								fontStyle: "italic",
							}}
						>
							- {lexicon[x].type}.
						</span>
						<span style={{ position: "absolute", left: "9.5rem" }}>
							- {lexicon[x].definition.join("; ")}
						</span>
					</p>
				))}
		</>
	);
};

export default Language;
