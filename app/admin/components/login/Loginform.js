import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

function Loginform() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showpassword, setShowpassword] = useState(false)

    const Loginsubmit=async()=>{
        const postdata={
            email:email,
            password:password
        }
        console.log(postdata)
        const {data}=await axios.post("/api/admin/login",postdata)
        console.log(data)
        if(data.success){
            await localStorage.setItem("token",data.token)
            router.push("/admin")
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token)
        if (token) {
            router.push("/admin")
        }
    }, [])

    return (
        <div className="h-screen w-screen 
    flex justify-center items-center 
    bg-[url('https://myrathemes.com/plugauth/layouts/assets/images/bg-auth.jpg')]  relative bg-cover 
    bg-top after:absolute after:inset-0 after:bg-black after:-z-10">
            <div className="xl:w-1/2 md:w-3/4 w-full m-8 whitespace-nowrap">
                <div className="flex bg-white overflow-hidden rounded-xl">
                    <div className="w-1/2 lg:block hidden p-2">
                        <img src="https://myrathemes.com/plugauth/layouts/assets/images/bg-auth-2.png" alt="" className="h-full w-full rounded-xl" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="px-6 py-8">
                            <div className="flex justify-between items-start">
                                <h5 className="text-xl font-bold text-gray-700 mb-6">Login</h5>
                                <a href="#" className="flex mb-6">

                                </a>
                            </div>

                            <div className="mb-4">
                                <label className="flex font-semibold text-base mb-2" htmlFor="EmailAddress">
                                    Email Address
                                </label>
                                <input
                                    id="EmailAddress"
                                    className="p-2 font-normal rounded block w-full border-gray-200 text-sm focus:border-gray-300 focus:ring-0 bg-white"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="flex font-semibold text-base mb-2" htmlFor="Password">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="Password"
                                    className="p-2 font-normal rounded block w-full border-gray-200 text-sm focus:border-gray-300 focus:ring-0 bg-white"
                                    type={showpassword?"text":"password"}
                                    placeholder="Enter your password"
                                />
                            </div>

                            < div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="p-4 rounded text-sky-500 cursor-pointer border-gray-300 focus:ring-0 focus:ring-offset-0"
                                        checked={showpassword}
                                        id="checkbox-signin"
                                        onChange={()=>setShowpassword(!showpassword)}
                                        
                                    />
                                    <label className="ms-2 inline-block text-sm font-semibold cursor-pointer text-gray-600" htmlFor="checkbox-signin">
                                        Show Password
                                    </label>
                                </div>
                               
                            </div>


                            <div className="flex justify-center mb-6">
                                <button
                                onClick={()=>Loginsubmit()}
                                className="inline-flex items-center justify-center rounded py-1.5 px-3 text-sm font-semibold transition-all w-full text-white bg-sky-500">
                                    Log In
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginform