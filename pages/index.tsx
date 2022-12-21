import type { GetStaticProps } from "next";
import { getPostList, getPostMetadata, PostMetadata } from "../lib/getPostData";
import { Tag } from "./articles/[id]";
import Router, { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { useEffect } from "react";

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

type Filters = {
	tags?: string[];
	dateL?: string;
	dateR?: string;
};
function buildPostList(postList: PostMetadata[], filters: Filters) {
	const list = postList
		.filter((x: PostMetadata) => x.hidden != "true")
		.filter((x: PostMetadata) =>
			filters.tags
				? filters.tags.reduce(
						(a: boolean, c: string) => a && x.tags.includes(c),
						true
				  )
				: true
		)
		.filter((x: PostMetadata) =>
			filters.dateL
				? new Date(x.dateCreated) > new Date(filters.dateL)
				: true
		)
		.filter((x: PostMetadata) =>
			filters.dateR
				? new Date(x.dateCreated) < new Date(filters.dateR)
				: true
		)
		.reverse()
		.map((x: PostMetadata) => <Card postData={x} />);
	return list.length > 0 ? list : <p>No posts found.</p>;
}

const Home = ({ postList }: { postList: PostMetadata[] }) => {
	let router = useRouter();
	let query = router.query;
	let filters: Filters = {
		tags: query.tags
			? (query.tags as string[]).reduce
				? (query.tags as string[])
				: [query.tags as string]
			: undefined,
		dateL: query.dates as string | undefined,
		dateR: query.datef as string | undefined,
	};
	return (
		<>
			{filters.tags || filters.dateL || filters.dateR ? (
				<div style={{ marginBottom: 0, display: "block" }}>
					<p
						style={{
							display: "flex",
							justifyContent: "space-between",
							flexDirection: "row",
							width: "48rem",
						}}
					>
						<span
							style={{
								textAlign: "left",
								marginLeft: 0,
								marginTop: 0,
								marginBottom: 0,
							}}
						>
							Filtering to:
						</span>
						<span
							style={{
								textAlign: "right",
								marginRight: 0,
								marginTop: 0,
								marginBottom: 0,
							}}
						>
							<Link
								href="/"
								onClick={() => {
									filters = {};
								}}
							>
								╳
							</Link>
						</span>
					</p>
					{filters.tags && filters.tags.length > 0 ? (
						<p style={{ display: "block" }}>
							{filters.tags!.map((x: string) => (
								<Tag tagName={x} />
							))}
						</p>
					) : (
						""
					)}
					{filters.dateR ? (
						<p>
							Posts before <code>{filters.dateR}</code>,
						</p>
					) : (
						""
					)}
					{filters.dateL ? (
						<p>
							Posts after <code>{filters.dateL}</code>
						</p>
					) : (
						""
					)}
				</div>
			) : (
				<></>
			)}
			<div>{buildPostList(postList, filters)}</div>
		</>
	);
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
