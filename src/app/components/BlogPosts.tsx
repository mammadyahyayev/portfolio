import React, { useEffect } from "react";
import BlogPost from "./BlogPost.tsx";
import { blogPostsData } from "../data/blogsData.ts";
import { MediumClient, PublishedPost } from "medium-sdk-ts";

const BlogPosts = () => {

    const [posts, setPosts] = React.useState<PublishedPost[]>([])

    useEffect(() => {
        const client = new MediumClient();
        client.getPosts("mammadyahya")
            .then(mediumPosts => {
                console.log(`Fetched ${mediumPosts.length} posts`)
                setPosts(mediumPosts)
            })
            .catch(err => console.error("Failed to fetch medium posts", err))
    }, [])

    return (
        <ul className="group/list">
            {blogPostsData.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 3).map(post => (
                <BlogPost post={post} key={post.id} />
            ))}
        </ul>
    );
};

export default BlogPosts;
