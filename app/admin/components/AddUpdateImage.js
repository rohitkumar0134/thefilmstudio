import { Dialog, DialogTitle } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AddUpdateImage({ data, close_drawer, openmodal }) {
    const [category, setCategory] = useState()
    const [categoryid, setCategoryid] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState("");
    const [type, setType] = useState("image")
    const [status, setStatus] = useState(1);

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        setThumbnail(file);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleDelete = (id) => {
        // Add your delete logic here
        console.log(`Delete button clicked for ID: ${id}`);
    };

    const handleAdd = () => {
        // Add your add logic here
        console.log("Add button clicked");
        const postdata = {
            thumbnailimg: thumbnail,
            image: type=="image"?image:"",
            video: type=="image"?"":video,
            status: status,
            category: categoryid,

        }
        console.log(postdata)
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
        
        if(data){
            setThumbnail(data?.thumbnailimg)
            setVideo(data?.video)
            setStatus(data?.status)
            setCategoryid(data?.category)
            setImage(data?.image)
        }


    }, [])

    return (
        <>
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
                                <option key={cat.id} value={cat.id}>
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
                        <button className="mx-4 bg-gray-500 p-2 px-8 rounded" onClick={handleAdd}>
                            Add
                        </button>
                    </div>
                </div>
                <div className='mb-2' />
            </Dialog>
        </>
    );
}

export default AddUpdateImage;
