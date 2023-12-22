import { useParams } from "react-router-dom"

const SinglePost = ({posts}) => {
    const { id } = useParams();
    const post = posts.find((post) => post.id === id);
    console.log(post);

    return (

        <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </div>
    )
}

export default SinglePost