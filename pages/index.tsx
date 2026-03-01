import type { GetStaticProps } from "next";
import { getPostList, getPostMetadata, PostMetadata } from "../lib/getPostData";
import { Tag } from "./articles/[id]";
import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
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
      filters.dateL ? new Date(x.dateCreated) > new Date(filters.dateL) : true
    )
    .filter((x: PostMetadata) =>
      filters.dateR ? new Date(x.dateCreated) < new Date(filters.dateR) : true
    )
    .reverse()
    .map((x: PostMetadata, i) => <Card postData={x} key={i} />);
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
        <div className="filterBar">
          <div className="filterHeader">
            <span>Filtering to:</span>
            <Link href="/" className="filterClose">
              &#x2715;
            </Link>
          </div>
          {filters.tags && filters.tags.length > 0 && (
            <p>
              {filters.tags.map((x: string, i) => (
                <Tag tagName={x} key={i} />
              ))}
            </p>
          )}
          {filters.dateR && (
            <p>
              Posts before <code>{filters.dateR}</code>,
            </p>
          )}
          {filters.dateL && (
            <p>
              Posts after <code>{filters.dateL}</code>
            </p>
          )}
        </div>
      ) : null}
      <div>{buildPostList(postList, filters)}</div>
    </>
  );
};

const Card = ({ postData }: { postData: PostMetadata }) => {
  return (
    <Link href={`/articles/${postData.id}`} className="postCard">
      <h2>{postData.title}</h2>
      <p className="subtitle">{postData.subtitle}</p>
      <div className="metaContainer">
        <p className="tags">
          Tags:
          {postData.tags.map((x: string, i) => (
            <span className="tagElement" key={i}>{`#${x}`}</span>
          ))}
        </p>
        <p className="datePublished">{postData.dateCreated}</p>
      </div>
    </Link>
  );
};

export default Home;
