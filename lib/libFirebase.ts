import { FirebaseApp, initializeApp } from "firebase/app";
import {
	FirebaseStorage,
	getBytes,
	getStorage,
	ref,
	uploadBytes,
} from "firebase/storage";
import { Word } from "./langsHelpers";

export type FirebaseApps = {
	app: FirebaseApp;
	storage: FirebaseStorage;
};

export function initialiseFirebase(): FirebaseApps {
	const firebaseConfig = {
		authDomain: "worldserver-6617d.firebaseapp.com",
		projectId: "worldserver-6617d",
		storageBucket: "worldserver-6617d.appspot.com",
		messagingSenderId: "886362635257",
		appId: "1:886362635257:web:f32fff0dcfe3338fe7db28",
	};
	const app = initializeApp(firebaseConfig);
	const storage = getStorage(app);

	return { app, storage };
}

export async function getLexicon(storage: FirebaseStorage, lang: string) {
	// Download and parse the JSON
	const storageRef = ref(storage, `langs/${lang}/lexicon.json`);
	const data = await getBytes(storageRef);
	const uint = new Uint8Array(data);
	let string = decodeUTF(uint);
	let obj = JSON.parse(string);
	return obj;
}

export async function addWord(
	storage: FirebaseStorage,
	lang: string,
	word: { [x: string]: Word }
) {
	let lexicon = await getLexicon(storage, lang);
	lexicon = { ...lexicon, ...word };
	let string = JSON.stringify(lexicon, null, 4);
	const storageRef = ref(storage, `langs/${lang}/lexicon.json`);
	console.log(encodeUTF(string));
	await uploadBytes(storageRef, encodeUTF(string));
	console.log(`Successfully added word: ${word}`);
}

function encodeUTF(string: string) {
	const codes: number[] = string
		.split("")
		.map((c: string) => c.charCodeAt(0));
	const uint = new Uint8Array(
		codes.map((c: number) => encodeUTFChar(c)).flat()
	);
	return uint;
}

function encodeUTFChar(c: number) {
	if (c < 0x80) return [c];
	else if (c < 0x800) {
		return [0xc0 | (c >> 6), 0x80 | (c & 0x3f)];
	} else if (c < 0xd800 || c >= 0xe000) {
		return [0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f)];
	} else return [];
}

function decodeUTF(array: Uint8Array) {
	var out, i, len, c;
	var char2, char3;

	out = "";
	len = array.length;
	i = 0;
	while (i < len) {
		c = array[i++];
		switch (c >> 4) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				// 0xxxxxxx
				out += String.fromCharCode(c);
				break;
			case 12:
			case 13:
				// 110x xxxx   10xx xxxx
				char2 = array[i++];
				out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
				break;
			case 14:
				// 1110 xxxx  10xx xxxx  10xx xxxx
				char2 = array[i++];
				char3 = array[i++];
				out += String.fromCharCode(
					((c & 0x0f) << 12) |
						((char2 & 0x3f) << 6) |
						((char3 & 0x3f) << 0)
				);
				break;
		}
	}

	return out;
}
