import fs from "fs";

async function getPubs(path: string) {
	return { ...JSON.parse(fs.readFileSync(path, "utf8")) };
}

export default getPubs;
