import { FirebaseApp, initializeApp } from "firebase/app";
import { FirebaseStorage, getBytes, getStorage, ref } from "firebase/storage";

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
