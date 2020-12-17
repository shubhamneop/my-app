import Link from 'next/link';

export default Page => {
    return () => (
      <div>
        <nav>
          <ul>
              <li>
              <Link href="/">
                  Home
              </Link>
              </li>
              <li>
                <Link href="/blog">
                 Blog
                </Link>
              </li>
          </ul>
          <style jsx>
              {`
              li {
                  display:inline;
                  padding: 5px;
              }
              `}
          </style>
        </nav>
        <main>
          <Page />
        </main>
      </div>
    )
  }