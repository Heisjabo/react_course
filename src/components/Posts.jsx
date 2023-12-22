import { Link } from "react-router-dom";

const Posts = ({posts}) => {
    

    return (
        <ul>
            {posts.map((post, index) => {
                return (
                    <li key={index}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                )
            })}
        </ul>
    )
}

export default Posts;