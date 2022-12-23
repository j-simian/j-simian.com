import { GetServerSideProps } from "next";
import { useState } from "react";
import useAdmin from "../lib/authenticate";
import { addWord } from "../lib/libFirebase";
import { Word, wordType } from "../pages/wb/langs/[name]";
import { firebaseStorage } from "../pages/_app";

const AdminPanel = ({ language }: { language: string }) => {
	const admin = useAdmin();
	console.log(admin);

	const [newWord, setNewWord] = useState("");
	const [newPos, setNewPos] = useState<wordType>("");
	const [newDef, setNewDef] = useState([""]);

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
				<p>
					<input
						type="text"
						style={{ width: "6rem" }}
						value={newWord}
						onChange={(e) => setNewWord(e.currentTarget.value)}
					></input>
					<input
						type="text"
						style={{ width: "3.5rem" }}
						value={newPos}
						onChange={(e) =>
							setNewPos(e.currentTarget.value as wordType)
						}
					></input>
					<input
						type="text"
						style={{ width: "20.5rem" }}
						value={newDef.join("; ")}
						onChange={(e) =>
							setNewDef(e.currentTarget.value.split("; "))
						}
					></input>
					<button
						style={{ width: "4rem" }}
						onClick={() => submitWord(newWord, newPos, newDef)}
					>
						+
					</button>
				</p>
			) : (
				<></>
			)}
		</>
	);
};

export default AdminPanel;
