const getPostsData = async () => {
    const res =await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}



export default async function ListOfPosts() {
    const posts = await getPostsData();
    return (
       
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1> This is the List of Posts</h1>
            {posts.map((post) => {
                return <p>{post.title}</p>;
            })}
        </div>
    )
}