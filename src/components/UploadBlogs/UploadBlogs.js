import React from 'react';
import { useForm } from "react-hook-form";

const UploadBlogs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // const handleImageUpload = () => {
    //     console.log("This is form");
    // }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("example")} />
                <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default UploadBlogs;