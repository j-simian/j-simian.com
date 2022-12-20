import { getPostData } from "../../lib/getPostData";
import { GetStaticPaths, GetStaticProps } from "next";
import { glob } from "glob";
import path from "path";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params!.id);

	return { props: { postData } };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
	let paths: string[] = [];
	glob(path.join("./articles", "**.mdx"), {}, (_, files) => {
		paths = files;
	});

	return { paths, fallback: "blocking" };
};

export default function Article({ postData }) {
	return (
		<>
			{postData.title}
			<br />
			{postData.id}
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</>
	);
}
