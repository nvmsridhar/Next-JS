import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>This is News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-a-great-page">Next js A great page</Link>
        </li>
        <li>
          <Link href="/news/something-else">something-else page</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
