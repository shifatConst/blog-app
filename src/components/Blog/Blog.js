import React from 'react';
import { useHistory } from 'react-router-dom';

const Blog = ({blog}) => {
    const history = useHistory();
    const showFullBlog = id => {
        history.push(`/blogs/${id}`)
    }
    return (
        <div className="col-sm-4 text-center">
            <img src={blog.imageURL} alt="" />
            <h2>{blog.title}</h2>
            <button className="btn btn-primary" onClick={() => showFullBlog(blog._id)}> See full blog </button>
        </div>
    );
};

export default Blog;