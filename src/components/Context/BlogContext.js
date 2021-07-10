import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [blogs, setBlogs] = useState([]);
    return (
        <BlogContext.Provider value={[blogs, setBlogs]}>
            {props.children}
        </BlogContext.Provider>
    );
};