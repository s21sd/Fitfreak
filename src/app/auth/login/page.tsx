"use client"
import React, { useState } from 'react'
import '../register/register.css'
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
const page = () => {
    const router = useRouter();
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValue((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }
    const handleSignIn = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'login',
                    email: formValue.email,
                    password: formValue.password,
                })
            });
            if (!response.ok) {
                toast.error('Failed to login')
                throw new Error('Failed to login')
            }
            const responseData = await response.json();
            toast.success(responseData.message)
        } catch (error) {
            toast.error('Failed to login')
            throw new Error('Failed to login')
        }
    }
    return (
        <div className='h-screen flex justify-center items-center bg-[#ffc20e]'>
            <Toaster />
            <form className="form" onSubmit={handleSignIn}>
                <div className="flex-column">
                    <label>Email </label></div>
                <div className="inputForm">
                    <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                    <input type="text" required name='email' className="input" value={formValue.email} onChange={handleChange} placeholder="Enter your Email" />
                </div>

                <div className="flex-column">
                    <label>Password </label></div>
                <div className="inputForm">
                    <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
                    <input type="password" required name='password' className="input" value={formValue.password} onChange={handleChange} placeholder="Enter your Password" />
                </div>

                <button type='submit' className="button-submit">Sign In</button>
                <p className="p">Already have an account? <span className="span" onClick={() => router.push('/auth/register')} >Sign Up</span>
                </p>
            </form>
        </div>
    )
}

export default page
