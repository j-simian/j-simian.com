import { getPostData } from "../../lib/getPostData";
import { GetStaticPaths, GetStaticProps } from "next";
import { glob } from "glob";
import path from "path";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params!.id as string);

	return { props: { postData } };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
	const ids = ["1"];
	let paths: any = ids.map((x) => ({ params: { id: x } }))
	console.log(paths);

	return { paths, fallback: "blocking" };
};

export default function Article({ postData }: any) {
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
