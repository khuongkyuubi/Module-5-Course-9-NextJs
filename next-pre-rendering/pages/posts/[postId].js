import {useRouter} from "next/router";

function PostDetail({post}) {
    // const router = useRouter();
    // if (router.isFallback) {
    //     return <h1>Loading...</h1>
    // }
    return (
        <>
            <h2>{post.id} : {post.title}</h2>
            <p>{post.body}</p>
        </>
    )


}

export default PostDetail;

export async function getStaticPaths() {
    // Thường thì sẽ có apt để lấy ra số lượng post
    //use fetch api to get number of id
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const paths = data.map(post => (
            {
                params: {
                    postId: `${post.id}`
                }
            }
        )
    );

    return {
        paths: [
            {
                params: {postId: "1"}
            },
            {
                params: {postId: "2"}
            },
            {
                params: {postId: "3"}
            }
        ],
        // nếu params postId nằm ngoài list trên thì nó sẽ nhảy vào not found
        // paths,
        fallback: "blocking"
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const {postId} = params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await response.json();
    console.log("Generating page for  /post/" + postId);


    return {
        props: {
            post: data
        }
    }

}

