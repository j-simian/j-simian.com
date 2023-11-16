import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <h1>Page Not Found!</h1>
      <p>
        Sorry, the page you were looking for is not here. Try returning to the
        <Link href="/">home</Link> page.
      </p>
    </>
  );
};

export default PageNotFound;
