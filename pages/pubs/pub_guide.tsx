import { GetStaticProps } from "next";
import getPubs from "../../lib/getPubs";

export const getStaticProps: GetStaticProps = async () => {
  const path = require("path");
  const pubs = await getPubs(path.join(process.cwd(), `/data/pubs.json`));
  return { props: { pubs } };
};
const PubGuide = ({ pubs }: any) => {
  return (
    <>
      <h1>The Oxford Pub Guide</h1>
      {Object.getOwnPropertyNames(pubs).map((p) => (
        <>
          <h3>{p}</h3>
          <p>{pubs[p].rating}/10</p>
          <p>{pubs[p].description}</p>
        </>
      ))}
    </>
  );
};

export default PubGuide;
