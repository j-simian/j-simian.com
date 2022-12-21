import { getPostData, getPostList, Post } from "../../lib/getPostData";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params!.id as string);

	return { props: { postData } };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
	const ids = await getPostList();
	let paths: any = ids.map((x: string) => ({ params: { id: x } }));
	return { paths, fallback: "blocking" };
};

export default function Article({ postData }: { postData: Post }) {
	return (
		<>
			<header className="header">
				<h1>{postData.metadata.title}</h1>
				<p className="datePublished">
					{" "}
					First published on: {postData.metadata.dateCreated}{" "}
				</p>
				<p className="tags">
					Tags:
					{postData.metadata.tags.map((x: string) => (
						<Tag tagName={x} />
					))}
				</p>
			</header>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</>
	);
}

export const Tag = ({ tagName }: { tagName: string }) => {
	return (
		<code className="tagElement" style={{ marginBottom: 0 }}>
			<Link href={`/?tags=${tagName}`}>{`#${tagName}`}</Link>
		</code>
	);
};
