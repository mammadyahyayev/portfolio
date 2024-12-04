import BlogPost from "./BlogPost.tsx";
import { blogPostsData } from "../data/blogsData.ts";

const BlogPosts = () => {
    return (
        <ul className="group/list">
            {blogPostsData.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 3).map(post => (
                <BlogPost post={post} key={post.id} />
            ))}
        </ul>
    );
};

export default BlogPosts;
