import React, { useEffect, useState } from 'react'
import AddUpdatecategory from './AddUpdatecategory'
import ToggleButton from '../common/ToggleButton'
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import { useSnackbar } from 'notistack';

function Category() {
  const { enqueueSnackbar } = useSnackbar();

    const [openmodal, setOpenmodal] = useState(false)
    const [editdata, setEditdata] = useState("")
    const [isLoading,setIsLoading]=useState(true)
    const [categories, setCategories] = useState([]);


const fetchcategories=async()=>{
const {data}=await axios.get('/api/admin/category')
console.log(data)
setCategories(data.category)
setIsLoading(false)
}
useEffect(()=>{
fetchcategories()
},[])


const handleToggle = async (_id, status) => {
    try {
      const updatedCategory = {
        _id: _id,
        status: !status,
        token:localStorage.getItem("token")
      };
      console.log(updatedCategory)
      const {data}=await axios.post("/api/admin/category/toggle",updatedCategory)
      if (data.success) {
        enqueueSnackbar("Category Toggle successfully", { variant: 'success' });
        fetchcategories()


    }
    } catch (error) {
      
      console.error("An error occurred:", error);
    }
  };
  
    const close_modal = () => {
        setOpenmodal(false)
        setEditdata("")
        fetchcategories()

    }

    return (
        <>
            <div  className='mt-2'>
                <button
                    onClick={() => {
                        setOpenmodal(true)
                    }}
                    className='absolute right-0 m-2 bg-blue-500 p-2 px-4 rounded-md text-white'>
                    Add New image +
                </button>
            </div>
            <div className='  <div className="flex items-center justify-center py-4 md:py-8 flex-wrap mt-12 md:mt-2 lg:mt-8">'>
            <table className="basic mt-4 lg:mt-6">
            <thead>
              <tr className="font-semibold">
                <td>Category name</td>
                <td>Status</td>
                <td>Option</td>
              </tr>
            </thead>
            <tbody>
              {isLoading ? ( // Check if data is loading
    <tr>
      <td colSpan="7" className="p-4 text-center bg-gray-200">
        <FaSpinner className="animate-spin h-5 w-5 inline-block mr-2" />
        Loading...
      </td>
    </tr>
  ) : (
              
              
              
              categories.length > 0 &&
                categories.map((category) => (
                  <tr key={category?._id}>
                    <td className='text-center'>{category?.category}</td>
                    <td>
                      <ToggleButton
                        handleToggle={handleToggle}
                        isChecked={category?.status}
                        _id={category?._id}
                      />
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() =>{
                            setOpenmodal(true)
                            setEditdata(category)}}
                        className="btn-default"
                      >
                        Edit
                      </button>
              
                    </td>
                  </tr>
                )))}
            </tbody>
          </table>
          </div>

            {openmodal &&
                <AddUpdatecategory
                    close_modal={close_modal}
                    openmodal={openmodal}
                    data={editdata}
                />}
        </>
    )
}

export default Category