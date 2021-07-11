import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className="col-sm-4 text-center">
            <img src={blog.imageURL} alt="" />
            <h2>{blog.title}</h2>
        </div>
    );
};

export default Blog;