import { Dialog, DialogTitle } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

function AddUpdatecategory({ data, close_modal, openmodal }) {
  const { enqueueSnackbar } = useSnackbar();

  const [categoryName, setCategoryName] = useState("")

  useEffect(() => {
    if (data) {
      setCategoryName(data?.category)
    }

  }, [])

const handleAdd = async () => {
    try {
        // Add your add logic here
        console.log("Add button clicked");

        console.log(categoryName);
        
        const { data } = await axios.post("/api/admin/category", { category: categoryName , token :localStorage.getItem("token")});
        console.log(data);

        // You can customize the success message based on your response data
        if (data.success) {
            enqueueSnackbar("Category added successfully", { variant: 'success' });
          _close_drawer()

        } else {
            // Customize the error message based on your response data
            enqueueSnackbar("Failed to add category", { variant: 'error' });
        }
    } catch (error) {
        console.error("Error:", error);
        enqueueSnackbar("An error occurred while adding category", { variant: 'error' });
    }
};


const handleUpdate = async (_id) => {
  try {
      // Add your add logic here
      console.log("Add button clicked");

      console.log(categoryName);
      
      const { data } = await axios.put("/api/admin/category", 
      { 
        _id:_id,
        category: categoryName ,
        token :localStorage.getItem("token")
      }
      );
      console.log(data);

      // You can customize the success message based on your response data
      if (data.success) {
          enqueueSnackbar("Category added successfully", { variant: 'success' });
          _close_drawer()
      } else {
          // Customize the error message based on your response data
          enqueueSnackbar("Failed to add category", { variant: 'error' });
      }
  } catch (error) {
      console.error("Error:", error);
      enqueueSnackbar("An error occurred while adding category", { variant: 'error' });
  }
};

  const _close_drawer=()=>{
    setCategoryName("")
    close_modal()
  }

  return (
    <>
      <Dialog onClose={_close_drawer} open={openmodal}>
        <DialogTitle>
          {data ? "Update image" : "Add Image"}
        </DialogTitle>
        <div className='grid grid-cols-4 gap-4' style={{ borderRadius: '5px' }}>
        <div className="col-span-4 p-2">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Category Name
              </label>
              <input
                type="text"
                id="image"
                placeholder='Category'
                value={categoryName}
                className="bg-slate-200 p-4 m-2 rounded"
                onChange={(e) => setCategoryName(e.target.value)}
              />
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

export default AddUpdatecategory