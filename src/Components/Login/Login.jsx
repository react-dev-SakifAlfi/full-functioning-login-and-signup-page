import React, { useState } from 'react'
import Loginanimation from '../../../public/Animations/Loginanimation.json'
import Lottie from 'lottie-react'
import './Login.css'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
    // variables


    const[email,setEmail]                =useState('')
    const[EmailError,setEmailError]      =useState('')
    const[password,setpassword]          =useState('')
    const[passwordError,setpasswordError]=useState('')
    const[show,setShow]                  =useState(false)






    // functions

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    
    const handlepass=(e)=>{
        setpassword(e.target.value)
    }



    // submit function

    const handleSubmit=(e)=>{
       e.preventDefault()
       
       if(!email){
       setEmailError('Enter Your Email!')
       }
       else if(!password){
        setpasswordError('Enter Your password!')
       }else{
        toast.success('success in your login!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
       }
    }
    // show function
    const handelShow=()=>{
        setShow(!show)
console.log(show)
    }






    return (
        <>
            <div className='w-full h-screen flex justify-center gap-[100px] items-center'>
                <div className="animatons flex w-[500px] justify-between items-center">
                    <Lottie animationData={Loginanimation} />
                </div>
                <div className="login-form">
                    <h1 className='Login_head'>Login to Enjoy</h1>
                     <form onSubmit={handleSubmit} className='main_form'>
                        <label>Email</label>
                        <br />
                        <input onChange={handleEmail} placeholder='Enter Your Email' type="email" />
                        <br />
                        <p className='error'>{EmailError}</p>
                        <label>Password</label>
                        <br />
                        <div className="pass_div">
                            {
                                show?
                                <FaRegEyeSlash onClick={handelShow} className='eye_icon'/>
                                :
                                <FaRegEye onClick={handelShow} className='eye_icon'/>

                            }
                        <input onChange={handlepass} placeholder='Enter Your Password' type={show?'text':'password'} />
                        </div>
                        <p className='error'>{passwordError}</p>
                        <button type='submit' className='loginButton'>Login</button>
                        <Link to='/Register'><p className='text-sm font-normal text-black'>Don't Have an Account ? <span className='text-white font-bold'>SignUp</span></p></Link>
                     </form>
                </div>
            </div>


        </>
    )
}

export default Login 