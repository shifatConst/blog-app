import React, { useContext, useEffect } from 'react';
import Blog from '../Blog/Blog';
import { BlogContext } from '../Context/BlogContext';

const AllBlogs = () => {
    const [blogs, setBlogs] = useContext(BlogContext);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    })
    return (
        <div className="row">
            {
                blogs.map(blog => 
                <Blog 
                    key = {blog._id}
                    blog = {blog}
                />)
            }
        </div>
    );
};

export default AllBlogs;