import { GetStaticProps } from "next";
import { renderMD } from "../lib/getPostData";

export const getStaticProps: GetStaticProps = async () => {
	const content = await renderMD("./pages/about.mdx");
	return { props: { content: content.contentHtml } };
};
const About = ({ content }: { content: string }) => {
	return (
		<div
			className="article-content"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

export default About;
