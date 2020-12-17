import Link from 'next/link';
import {useRouter} from 'next/router';
import posts from '../postes.json';

const Blog = () => {
    const router = useRouter();
    
   return( 
        <div>
            <h1>Blog Page</h1>
            <ul>
                {Object.entries(posts).map((post,index) => {
                    return ( 
                         <li key={index}>
                             <Link href="/blog/[id]" as={'blog/' +post[0]}>
                             <a>{post[1].title}</a>
                             </Link>
                         </li> 
                         );
                })}
            </ul>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
   );
};

export default Blog;