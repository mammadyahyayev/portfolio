import BlogPost from "./BlogPost.tsx";
import {blogPostsData} from "../data/blogsData.ts";

const Blogs = () => {
    return (
        <ul className="group/list">
            {blogPostsData.slice(0, 3).map(post => (
                <BlogPost post={post}/>
            ))}
        </ul>
    );
};

export default Blogs;
