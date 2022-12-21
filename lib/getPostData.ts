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

export type PostMetadata = {
	id: string;
	dateCreated: string;
	title: string;
	subtitle?: string;
	hidden?: string;
	tags: string[];
};
export type Post = {
	contentHtml: string;
	metadata: PostMetadata;
};

export async function renderMD(path: string) {
	const fileContents = fs.readFileSync(path, "utf8");

	const processedContent = await unified()
		.use(remarkParse)
		.use(remarkPrism)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(fileContents);
	let contentHtml = processedContent.toString();

	return {
		contentHtml,
	};
}

export async function getPostData(id: string): Promise<Post> {
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
	let metadata = await getPostMetadata(id);

	return {
		contentHtml,
		metadata,
	};
}

export async function getPostMetadata(id: string): Promise<PostMetadata> {
	return {
		...JSON.parse(
			fs.readFileSync(path.join("./articles/", "metadata.json"), "utf8")
		).articles[id],
		id: id,
	};
}

export async function getPostList(): Promise<string[]> {
	let articles = JSON.parse(
		fs.readFileSync(path.join("./articles/", "metadata.json"), "utf8")
	).articles;
	return Object.keys(articles);
}
