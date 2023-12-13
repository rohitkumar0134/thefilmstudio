import { Dialog, DialogTitle } from '@mui/material'
import React from 'react'

function AddUpdateImage() {
    return (
        <>
            <Dialog onClose={"close_drawer"} open={true}>
                <DialogTitle>
                    Add Image
                </DialogTitle>
                <div className='grid grid-cols-4 gap-4' style={{ borderRadius: '5px' }}>
                    <div className="col-span-4 p-4">
                        <input
                            type="text"

                            className="bg-slate-200 p-4 m-2 rounded"
                            placeholder="Category Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='col-span-2'>
                        <button className="mx-4 bg-red-500 p-2 px-8 rounded" onClick={() => handleDelete(data.id)}>
                            Delete
                        </button>
                    </div>
                    <div className='col-span-2'>
                        <button className="mx-4 bg-red-500 p-2 px-8 rounded" onClick={() => handleDelete(data.id)}>
                            Delete
                        </button>
                    </div>
                   
                </div>
                <div className='mb-2'/>
            </Dialog>
        </>
    )
}

export default AddUpdateImage