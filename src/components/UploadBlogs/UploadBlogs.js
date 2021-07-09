import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const UploadBlogs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
         const blogData = {
             title: data.title,
             description: data.description,
             imageURL: imageURL
         }

        console.log(blogData);
        const url = `http://localhost:5000/addBlog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
        .then(res => console.log('server side response', res))
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '763892cb50d79b3e8919930228c785b3');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Title" {...register("title", { required: true })} />
                <br />
                <input placeholder="Description" {...register("description", { required: true })} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default UploadBlogs;