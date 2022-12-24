export type wordType = "adj" | "adv" | "v" | "n" | "N" | "prep" | "inj. " | "";

export type Word = {
	definition: string[];
	type: wordType;
	derivations?: { [x: string]: Word };
};

export const diacriticMap = {
	// "◌̄": "",
	ā: "a",
	ē: "e",
	ī: "i",
	ō: "o",
	ū: "u",
	á: "a",
	é: "e",
	í: "i",
	ó: "o",
	ú: "u",
	à: "a",
	è: "e",
	ì: "i",
	ò: "o",
	ù: "u",
};

export const diacriticList = Object.getOwnPropertyNames(diacriticMap);

export const posMap = {
	All: "" as wordType,
	Adjectives: "adj" as wordType,
	Adverbs: "adv" as wordType,
	Interjections: "inj" as wordType,
	Nouns: "n" as wordType,
	Prepositions: "prep" as wordType,
	"Proper Nouns": "N" as wordType,
	Verbs: "v" as wordType,
};
