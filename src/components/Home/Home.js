import React from 'react';
import AllBlogs from '../AllBlogs/AllBlogs';
import UploadBlogs from '../UploadBlogs/UploadBlogs';

const Home = () => {
    return (
        <div>
            <UploadBlogs />
            <AllBlogs />
        </div>
    );
};

export default Home;