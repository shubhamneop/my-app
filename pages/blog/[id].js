import { useRouter } from 'next/router'
import posts from '../../postes.json';
import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link';

const Blog = props => {
//   const router = useRouter()

//   const post = posts[router.query.id];
//   if(!post) return <p></p>

  return (
    <>
      <h1>Blog post</h1>
      <h2>{props.post.title}</h2>
       <p>{props.post.content}</p>

       <Link href="/">Back</Link>
    </>
  )
}

Blog.getInitialProps = ({query}) => {
    return {
        post: posts[query.id]
    }
}
export default Blog;