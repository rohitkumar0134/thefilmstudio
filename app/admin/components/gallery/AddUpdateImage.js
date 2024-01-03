import { Dialog, DialogTitle } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../common/Loading';
import { useSnackbar } from 'notistack';

function AddUpdateImage({ data, close_drawer, openmodal }) {
    const { enqueueSnackbar } = useSnackbar();

    const [category, setCategory] = useState()
    const [categoryid, setCategoryid] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState("");
    const [type, setType] = useState("image")
    const [status, setStatus] = useState(1);
    const [isLoading, setIsLoading] = useState(false)


    const handleThumbnailChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const data = new FormData();
            data.append('file', file);
            const res = await axios.post('/api/admin/upload', data);
            // console.log(URL.createObjectURL(file))
            setThumbnail(res.data.fileName);
        }

    };



    const handleImageChange = async (e) => {
        setIsLoading(true)
        try {
            const file = e.target.files[0];

            if (file) {





                const data = new FormData();
                data.append('file', file);

                const res = await axios.post('/api/admin/upload', data);
                console.log(res);

                if (res?.data?.success) {
                    setImage(res.data.fileName);
                    setIsLoading(false)
                }
            }
        } catch (error) {
            setIsLoading(false)
            console.error("Error:", error);
            enqueueSnackbar(error, { variant: 'error' });

            // Handle the error, display a message, or take appropriate action
        }
    };

    const handleDelete = (_id) => {
        // Add your delete logic here
        console.log(`Delete button clicked for ID: ${id}`);
    };

    const handleAdd = async () => {
        try {
            // Add your add logic here
            console.log("Add button clicked");
            const postdata = {
                thumbnailimg: thumbnail,
                image: type === "image" ? image : "",
                video: type === "image" ? "" : video,
                status: status,
                category: categoryid,
                token :localStorage.getItem("token")
            };

            console.log(postdata);

            const { data } = await axios.put("/api/admin/gallery", postdata);

            // You can customize the success message based on your response data
            if (data.success) {
                enqueueSnackbar("Item added successfully", { variant: 'success' });
                _close_drawer()
            } else {
                // Customize the error message based on your response data
                enqueueSnackbar("Failed to add item", { variant: 'error' });
            }
        } catch (error) {
            console.error("Error:", error);
            enqueueSnackbar("An error occurred while adding item", { variant: 'error' });
        }
    };


    const handleUpdate = async (_id) => {
        try {
            // Add your update logic here
            console.log("Update button clicked");
            const postdata = {
                thumbnailimg: thumbnail,
                image: type === "image" ? image : "",
                video: type === "image" ? "" : video,
                status: status,
                category: categoryid,
                _id: _id,
                 token: localStorage.getItem("token")
            };

            console.log(postdata);

            const { data } = await axios.put("/api/admin/gallery", postdata);

            // You can customize the success message based on your response data
            if (data.success) {
                enqueueSnackbar("Item updated successfully", { variant: 'success' });
                _close_drawer()

            } else {
                // Customize the error message based on your response data
                enqueueSnackbar("Failed to update item", { variant: 'error' });
            }
        } catch (error) {
            console.error("Error:", error);
            enqueueSnackbar("An error occurred while updating item", { variant: 'error' });
        }
    };




    const _close_drawer = () => {
        setCategoryid("")
        setImage("")
        setThumbnail("")
        setVideo("")
        close_drawer()

    }


    useEffect(() => {
        console.log(data)
        const fetchcategory = async () => {
            const { data } = await axios.get("/api/user/category")
            console.log(data)
            setCategory(data)
        }
        fetchcategory()

        if (data) {
            setThumbnail(data?.thumbnailimg)
            setVideo(data?.video)
            setStatus(data?.status)
            setCategoryid(data?.category)
            setImage(data?.image)
        }


    }, [])

    return (
        <>
            {isLoading && <Loading />}
            <Dialog onClose={_close_drawer} open={openmodal}>
                <DialogTitle>
                    {data ? "Update image" : "Add Image"}
                </DialogTitle>
                <div className='grid grid-cols-4 gap-4' style={{ borderRadius: '5px' }}>
                    <div className="col-span-4 p-2">
                        <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                            Category Name
                        </label>
                        <select
                            id="categoryName"
                            className="bg-slate-200 p-4 m-2 rounded"
                            value={categoryid}
                            onChange={(e) => setCategoryid(e.target.value)}
                        >
                            <option value="" disabled>Select category</option>
                            {category?.map((cat) => (
                                <option key={cat._id} value={cat._id}>
                                    {cat.category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-span-4 p-2">
                        <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
                            Thumbnail
                        </label>
                        <input
                            type="file"
                            id="thumbnail"
                            className="bg-slate-200 p-4 m-2 rounded"
                            onChange={handleThumbnailChange}
                        />
                    </div>

                    <div className="col-span-4 p-2">
                        <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                            Type
                        </label>
                        <select
                            id="categoryName"
                            className="bg-slate-200 p-4 m-2 rounded"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="image" >Image</option>
                            <option value="video" >Video</option>


                        </select>
                    </div>

                    {type == "image" ? <div className="col-span-4 p-2">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="bg-slate-200 p-4 m-2 rounded"
                            onChange={handleImageChange}
                        />
                    </div>
                        :
                        <div className="col-span-4 p-2">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                Youtube Video Link
                            </label>
                            <input
                                type="text"
                                id="image"
                                placeholder='Paste youtube link'
                                value={video}
                                className="bg-slate-200 p-4 m-2 rounded"
                                onChange={(e) => setVideo(e.target.value)}
                            />
                        </div>}

                    <div className="col-span-4 p-2">
                        <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                            Show to Customer
                        </label>
                        <select

                            className="bg-slate-200 p-4 m-2 rounded"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value={1} >Yes</option>
                            <option value={0} >No</option>


                        </select>
                    </div>

                    <div className='col-span-2'>
                        <button className="mx-4 bg-red-500 p-2 px-8 rounded"
                            onClick={() => _close_drawer()}>
                            Cancel
                        </button>
                    </div>
                    <div className='col-span-2'>
                        {data ?
                            <button className="mx-4 bg-gray-500 p-2 px-8 rounded" onClick={() => handleUpdate(data._id)}>
                                Update
                            </button>
                            : <button className="mx-4 bg-gray-500 p-2 px-8 rounded" onClick={handleAdd}>
                                Add
                            </button>}
                    </div>
                </div>
                <div className='mb-2' />
            </Dialog>
        </>
    );
}

export default AddUpdateImage;
