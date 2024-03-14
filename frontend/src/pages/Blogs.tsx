import { BlogCard } from "../components/BlogCord";
import { AppBar } from "../components/AppBar";
import { useBlogs } from "../hooks/index";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="max-w-xl">
                    {blogs.map((blog, index) => (
                        <BlogCard 
                            key={index}
                            authorName={blog.author.name}
                            title={blog.title}
                            content={blog.content}
                            publishDate={"14 March 2024"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

