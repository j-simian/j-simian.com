import { unified } from "unified";
import remarkParse from "remark-parse";
import fs from "fs";
import path from "path";
import "highlight.js/styles/default.css";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkPrism from "remark-prism";
import rehypeRaw from "rehype-raw";
export async function getPostData(id: string) {
	const fullPath = path.join("./articles/", `${id}.mdx`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const processedContent = await unified()
		.use(remarkParse)
		.use(remarkPrism)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(fileContents);
	let contentHtml = processedContent.toString();
	console.log(contentHtml);

	return {
		id,
		contentHtml,
	};
}
