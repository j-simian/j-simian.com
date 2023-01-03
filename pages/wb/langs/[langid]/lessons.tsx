import { GetStaticPaths, GetStaticProps } from "next";
import { getLessons } from "../../../../lib/getPostData";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const language = params!.langid;
	const path = require("path");
	const lesson = await getLessons(
		path.join(process.cwd(), `/data/${language}_lessons.mdx`)
	);
	return { props: { language, lesson } };
};

export const getStaticPaths: GetStaticPaths<{ langid: string }> = async () => {
	return {
		paths: [{ params: { langid: "fasil" } }],
		fallback: "blocking",
	};
};

export default function LessonsPage({
	lesson,
}: {
	lesson: any;
	language: string;
}) {
	return <div dangerouslySetInnerHTML={{ __html: lesson.contentHtml }} />;
}
