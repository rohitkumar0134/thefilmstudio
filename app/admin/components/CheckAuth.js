import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function CheckAuth() {
    const router = useRouter()

    const verifytoken = async (token) => {
        const {data}=await axios.post("/api/admin/verify-token",{token:token})
        console.log(data)
        if(data.valid==false){
            localStorage.removeItem("token")
            router.push("/admin/login")
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token)
        if (token) {
            verifytoken(token)
            
        }
        else {
            router.push("/admin/login")
        }
    }, [])
    return (
   <></>
    )
}

export default CheckAuth