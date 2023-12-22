import React, { useEffect, useState } from 'react'
import AddUpdatebeforeAfter from './AddUpdatebeforeAfter';
import ToggleButton from '../common/ToggleButton'
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import BeforeAftermap from './BeforeAftermap';

function BeforeAfterpage() {
  const [openmodal, setOpenmodal] = useState(false)
  const [editdata, setEditdata] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [beforeAfterData, setBeforeAfterData] = useState([]);


  const fetchbeforeAfter = async () => {
    const { data } = await axios.get('/api/admin/beforeAfter')
    console.log(data)
    setBeforeAfterData(data.beforeAfter)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchbeforeAfter()
  }, [])



  const close_modal = () => {
    setOpenmodal(false)
    setEditdata("")

  }

  return (
    <>
      <div className='mt-2'>
        <button
          onClick={() => {
            setOpenmodal(true)
          }}
          className='absolute right-0 m-2 bg-blue-500 p-2 px-4 rounded-md text-white'>
          Add New image +
        </button>
      </div>
      <div className="mt-16 grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4 mx-2">
        {beforeAfterData?.map((data) => (
          <div key={data._id} className="relative">
            <BeforeAftermap
              before={data.beforeImage}
              after={data.AfterImage}
            />


            <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center items-center bg-white bg-opacity-75">
              <button className="mx-4 bg-red-500 p-2 px-4 rounded" onClick={() => handleDelete(data._id)}>
                Delete
              </button>
              <button
                onClick={() => {
                  setEditdata(data)
                  setOpenmodal(true)
                }}


                className="mx-4 bg-slate-500 p-2 px-4 rounded" >
                Edit
              </button>
            </div>

          </div>

        ))}

      
      </div>

      {openmodal &&
        <AddUpdatebeforeAfter
          close_modal={close_modal}
          openmodal={openmodal}
          data={editdata}
        />}
    </>
  )
}

export default BeforeAfterpage