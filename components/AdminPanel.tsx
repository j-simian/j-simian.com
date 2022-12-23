import { useRouter } from "next/router";
import { useRef } from "react";
import { useState } from "react";
import useAdmin from "../lib/authenticate";
import { addWord } from "../lib/libFirebase";
import { Word, wordType } from "../pages/wb/langs/[name]";
import { firebaseStorage } from "../pages/_app";

const AdminPanel = ({
	language,
	copyText,
	size,
}: {
	language: string;
	copyText: () => void;
	size: number;
}) => {
	const admin = useAdmin();
	const router = useRouter();
	console.log(admin);

	const [newWord, setNewWord] = useState("");
	const [newPos, setNewPos] = useState<wordType>("n");
	const [newDef, setNewDef] = useState([""]);
	const defRef = useRef<HTMLInputElement | null>(null);

	function submitWord(word: string, pos: wordType, def: string[]) {
		console.log(
			`Submitting new word: ${word} - ${pos}. - ${def.join("; ")}`
		);
		const obj: { [x: string]: Word } = {
			[word]: { type: pos, definition: def },
		};
		addWord(firebaseStorage, language, obj);
	}

	return (
		<>
			{admin && admin != "Loading" ? (
				<>
					<br />
					<p>Current words: {size}</p>
					<p style={{ marginBottom: 0, marginTop: 0 }}>
						<input
							type="text"
							ref={defRef}
							style={{ width: "6rem" }}
							value={newWord}
							onChange={(e) => setNewWord(e.currentTarget.value)}
						></input>
						<select
							style={{ width: "3.5rem" }}
							value={newPos}
							onChange={(e) =>
								setNewPos(e.currentTarget.value as wordType)
							}
						>
							<option value="adj">Adjectives</option>
							<option value="adv">Adverbs</option>
							<option value="inj">Interjection</option>
							<option value="n">Nouns</option>
							<option value="prep">Prepositions</option>
							<option value="N">Proper nouns</option>
							<option value="v">Verbs</option>
						</select>
						<input
							type="text"
							style={{ width: "20.5rem" }}
							value={newDef.join("; ")}
							onChange={(e) =>
								setNewDef(e.currentTarget.value.split("; "))
							}
						></input>
						<button
							style={{ width: "5rem" }}
							onClick={() => {
								if (!newWord || !newPos || !newDef) return;
								submitWord(newWord, newPos, newDef);
								setNewWord("");
								setNewPos("n");
								setNewDef([]);
								setTimeout(
									() => router.push(`/wb/langs/${language}`),
									500
								);
							}}
						>
							+
						</button>
						<button
							onClick={() => {
								setNewWord((x) => x + "ā");
								defRef.current?.focus();
							}}
						>
							ā
						</button>
						<button
							onClick={() => {
								setNewWord((x) => x + "ē");
								defRef.current?.focus();
							}}
						>
							ē
						</button>
						<button
							onClick={() => {
								setNewWord((x) => x + "ī");
								defRef.current?.focus();
							}}
						>
							ī
						</button>
						<button
							onClick={() => {
								setNewWord((x) => x + "ū");
								defRef.current?.focus();
							}}
						>
							ū
						</button>
						<button
							onClick={() => {
								copyText();
							}}
						>
							🗄
						</button>
						<button
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth",
								});
							}}
						>
							ᐱ
						</button>
					</p>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default AdminPanel;
