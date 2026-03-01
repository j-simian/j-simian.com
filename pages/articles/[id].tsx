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
		<article>
			<header className="articleHeader">
				<h1>{postData.metadata.title}</h1>
				<div className="articleMeta">
					<p className="datePublished">
						First published on: {postData.metadata.dateCreated}
					</p>
					<p className="tags">
						Tags:
						{postData.metadata.tags.map((x: string, i) => (
							<Tag tagName={x} key={i} />
						))}
					</p>
				</div>
			</header>
			<div
				className="article-content"
				dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
			/>
		</article>
	);
}

export const Tag = ({ tagName }: { tagName: string }) => {
	return (
		<span className="tagElement">
			<Link href={`/?tags=${tagName}`}>{`#${tagName}`}</Link>
		</span>
	);
};
