import { Dialog, DialogTitle } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Resizer from "react-image-file-resizer";
import { useSnackbar } from "notistack";
import Loading from '../common/Loading';


function AddUpdatebeforeAfter({ data, close_modal, openmodal }) {
    const { enqueueSnackbar } = useSnackbar();
    const [beforeImage, setBeforeImage] = useState(null)
    const [AfterImage, setAfterImage] = useState(null)
    const [status, setStatus] = useState(1);
    const [isLoading,setIsLoading]=useState(false)
   
    



    useEffect(() => {
        if (data) {
            setAfterImage(data?.AfterImage)
            setBeforeImage(data?.beforeImage)
            setStatus(data?.status)
        }

    }, [])

    const handleAdd = async () => {
        try {
            // Add your add logic here
            console.log("Add button clicked");
            const postdata = {
                token :localStorage.getItem("token"),
                beforeImage: beforeImage,
                AfterImage: AfterImage,
                status: status,
            };
    
            console.log(postdata);
    
            const { data } = await axios.post("/api/admin/beforeAfter", postdata);
            console.log(data);
    
            // You can check the response data and handle success or error accordingly
            if (data.success) {
                enqueueSnackbar("Image uploaded", { variant: 'success' });
                _close_drawer()
            } else {
                enqueueSnackbar("Error Message", { variant: 'error' });
            }
        } catch (error) {
            console.error("Error:", error);
            enqueueSnackbar("An error occurred", { variant: 'error' });
        }
    };
    

    const handleUpdate = async (_id) => {
        try {
            // Add your update logic here
            console.log("Update button clicked");
            const postdata = {
                token :localStorage.getItem("token"),
                beforeImage: beforeImage,
                AfterImage: AfterImage,
                status: status,
                _id: _id
            };
    
            console.log(postdata);
    
            const { data } = await axios.put("/api/admin/beforeAfter", postdata);
            console.log(data);
    
            // You can check the response data and handle success or error accordingly
            if (data.success) {
                enqueueSnackbar("Update successful", { variant: 'success' });
                _close_drawer()
            } else {
                enqueueSnackbar("Update failed", { variant: 'error' });
            }
        } catch (error) {
            console.error("Error:", error);
            enqueueSnackbar("An error occurred during the update", { variant: 'error' });
        }
    };
    

    const _close_drawer = () => {
        setBeforeImage("")
        setAfterImage("")
        close_modal()
    }
    
    const handleBeforeChange = async (e) => {
        setIsLoading(true)
        try {
            const file = e.target.files[0];
    
            if (file) {
                const imgname = e.target.files[0].name;
                const reader = new FileReader();
    
                const tempImagePromise = new Promise((resolve) => {
                    reader.onloadend = () => {
                        const img = new Image();
                        img.src = reader.result;
                        img.onload = () => {
                            const canvas = document.createElement("canvas");
                            const maxSize = Math.max(img.width, img.height);
                            canvas.width = maxSize;
                            canvas.height = maxSize;
                            const ctx = canvas.getContext("2d");
                            ctx.drawImage(
                                img,
                                (maxSize - img.width) / 2,
                                (maxSize - img.height) / 2
                            );
                            canvas.toBlob(
                                (blob) => {
                                    const file = new File([blob], imgname, {
                                        type: "image/png",
                                        lastModified: Date.now(),
                                    });
    
                                    console.log(file);
                                    resolve(file);
                                },
                                "image/jpeg",
                                0.8
                            );
                        };
                    };
    
                    reader.readAsDataURL(file);
                });
    
                const TempImage = await tempImagePromise;
    
                const data = new FormData();
                data.append('file', TempImage);
    
                const res = await axios.post('/api/admin/upload', data);
                console.log(res);
    
                if (res?.data?.success) {
                    setBeforeImage(res.data.fileName);
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
    

    const handleAfterChange = async (e) => {
        setIsLoading(true)

        try {
            const file = e.target.files[0];
    
            if (file) {
                const imgname = e.target.files[0].name;
                const reader = new FileReader();
    
                const tempImagePromise = new Promise((resolve) => {
                    reader.onloadend = () => {
                        const img = new Image();
                        img.src = reader.result;
                        img.onload = () => {
                            const canvas = document.createElement("canvas");
                            const maxSize = Math.max(img.width, img.height);
                            canvas.width = maxSize;
                            canvas.height = maxSize;
                            const ctx = canvas.getContext("2d");
                            ctx.drawImage(
                                img,
                                (maxSize - img.width) / 2,
                                (maxSize - img.height) / 2
                            );
                            canvas.toBlob(
                                (blob) => {
                                    const file = new File([blob], imgname, {
                                        type: "image/png",
                                        lastModified: Date.now(),
                                    });
    
                                    console.log(file);
                                    resolve(file);
                                },
                                "image/jpeg",
                                0.8
                            );
                        };
                    };
    
                    reader.readAsDataURL(file);
                });
    
                const TempImage = await tempImagePromise;
    
                const data = new FormData();
                data.append('file', TempImage);
    
                const res = await axios.post('/api/admin/upload', data);
                console.log(res);
    
                if (res?.data?.success) {
                    setAfterImage(res.data.fileName);
        setIsLoading(false)

                }
            }
        } catch (error) {
        setIsLoading(false)
        enqueueSnackbar("Error Message", { variant: 'error' });
            console.error("Error:", error);
            // Handle the error, display a message, or take appropriate action
        }
    };
    

  

    return (
        <>
        {isLoading&&<Loading/>}
            <Dialog onClose={_close_drawer} open={openmodal}>
                <DialogTitle>
                    {data ? "Update image" : "Add Image"}
                </DialogTitle>
                <div className='grid grid-cols-4 gap-4' style={{ borderRadius: '5px' }}>


                    <div className="col-span-4 p-2">
                        <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
                            Before Image
                        </label>
                        <input
                            type="file"
                            id="thumbnail"
                            className="bg-slate-200 p-4 m-2 rounded"
                            onChange={handleBeforeChange}
                        />
                    </div>

                    <div className="col-span-4 p-2">
                        <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
                            After Image
                        </label>
                        <input
                            type="file"
                            id="thumbnail"
                            className="bg-slate-200 p-4 m-2 rounded"
                            onChange={handleAfterChange}
                        />
                    </div>

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
    )
}

export default AddUpdatebeforeAfter