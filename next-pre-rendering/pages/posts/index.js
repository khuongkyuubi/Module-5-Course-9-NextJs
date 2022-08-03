import Link from "next/link";

function PostList({posts}) {
    return (
        <div>
            <h1>List of Post</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`} passHref>
                        {/*passHref if child not is a tag*/}
                        <h2>{post.id} {post.title}</h2>
                    </Link>
                    <hr/>
                </div>
            ))}

        </div>
    );
}

export default PostList;

export async function getStaticProps() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        return {
            props: {
                posts: data.slice(0, 3), //get 3 first posts
                // posts: data //get all first posts
            }
        }


    } catch (e) {
        console.log(e.message)
    }

}
