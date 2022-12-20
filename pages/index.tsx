import type { GetStaticProps } from "next";
import { getPostList, getPostMetadata, PostMetadata } from "../lib/getPostData";
import { Tag } from "./articles/[id]";
import Router from "next/router";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postIds = await getPostList();
	const postList: PostMetadata[] = [];
	for (let x in postIds) {
		postList.push(await getPostMetadata(x));
	}
	return {
		props: { postList: postList },
	};
};

function buildPostList(postList: PostMetadata[]) {
	return postList
		.filter((x: PostMetadata) => x.hidden != "true")
		.reverse()
		.map((x: PostMetadata) => <Card postData={x} />);
}

const Home = ({ postList }: { postList: PostMetadata[] }) => {
	return <div>{buildPostList(postList)}</div>;
};

const Card = ({ postData }: { postData: PostMetadata }) => {
	return (
		<div
			className="postCard"
			onClick={(_) => Router.push(`/articles/${postData.id}`)}
		>
			<h2>{postData.title}</h2>
			<p className="subtitle">{postData.subtitle}</p>
			<div className="metaContainer" style={{ display: "flex" }}>
				<p className="tags">
					Tags:
					{postData.tags.map((x: string) => (
						<Tag tagName={x} />
					))}
				</p>
				<p style={{ margin: 0 }}>
					Date published: {postData.dateCreated}
				</p>
			</div>
		</div>
	);
};

export default Home;
