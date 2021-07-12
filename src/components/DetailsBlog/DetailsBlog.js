import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsBlog = () => {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState();
    useEffect(() => {
        const url = `http://localhost:5000/blogs/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBlogDetail(data[0]));     
    },[id])
    return (
        <div>
            <img src={blogDetail?.imageURL} alt="" />
            <h2>{blogDetail?.title}</h2>
            <p>{blogDetail?.description}</p>
        </div>
    );
};

export default DetailsBlog;