const NowPage = () => {
  return (
    <>
      <blockquote>
        <p style={{ fontSize: "20px" }}>
          Sort of like a six-monthly social media update status - sharing your
          current projects and where you are in your life, like if an old friend
          asked, &quot;So, what have you been up to?&quot;
        </p>
      </blockquote>
      <h3>Academics</h3>
      <p>
        I&apos;m in Michaelmas term of my final year at Oxford before
        graduating. This term I am studying:
        <ul>
          <li>Computer Aided Formal Verification</li>
          <li>Information Theory</li>
          <li>Geometric Modelling</li>
          <li>Principles of Programming Languages</li>
        </ul>
      </p>
      <h3>Projects</h3>
      <p>
        Currently, my main project is building a small-scale exchange server in
        OCaml, alongside a React frontend.
      </p>
      <h5>Exchange Roadmap</h5>
      <ul>
        <li>Properly sequenced messages</li>
        <li>Reworking the message subscription system</li>
        <li>Introducing authentication on the frontend</li>
      </ul>
      <h3>Misc</h3>
      <p>
        I&apos;m the sound designer and pianist in a student production of The
        Trail to Oregon!
      </p>
    </>
  );
};

export default NowPage;
