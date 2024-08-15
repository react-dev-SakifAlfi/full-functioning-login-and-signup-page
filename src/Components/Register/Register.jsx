

import signUpanimation from '../../../public/Animations/signUp.json'
import Lottie from 'lottie-react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Flip, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader"; 

const Register = () => {
     // variables
     const  [userName,setuserName]                =useState('')
     const  [userNameError,setuserNameError]      =useState('')
     const  [email,setEmail]                      =useState('')
     const  [EmailError,setEmailError]            =useState('')
     const  [password,setpassword]                =useState('')
     const  [passwordError,setpasswordError]      =useState('')
     const  [show,setShow]                        =useState(false)
     const navigate                               =useNavigate()
 
 
//  ================== firebase variables part start
const auth = getAuth();
const [loading,setloading]    = useState(false)
 
 
 
     // functions
     const handleUser =(e)=>{
        setuserName(e.target.value)
        setuserNameError('')
    }
 
     const handleEmail =(e)=>{
         setEmail(e.target.value)
         setEmailError('')
     }
     
     const handlepass=(e)=>{
         setpassword(e.target.value)
         setpasswordError('')
     }
 
 
 
     // submit function
 
     const handleSubmit=(e)=>{
        e.preventDefault()
        if(!userName){
            setuserName('Enter Your UserName!')
            }
        
        if(!email){
        setEmailError('Enter Your Email!')
      
        }
        else if(!password){
         setpasswordError('Enter Your password!')
      
        }else{

            setloading(true)
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setloading(false)
                    toast.success('success in SignUp', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Zoom,
                        });
                       navigate('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
               setloading(false)
               if(errorCode=='auth/weak-password'){
                toast.warn('Your Password is weak', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Zoom,
                    });
               }
               if(errorCode=='auth/email-already-in-use'){
                toast.warn('email already in use', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Zoom,
                    });
               }
               
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
                    <Lottie className='w-[450px] h-[540px]' animationData={signUpanimation} />
                </div>
                <div className="login-form">
                    <h1 className='Login_head'>Register</h1>
                     <form onSubmit={handleSubmit} className='main_form'>
                        <label>User name</label>
                        <br />
                        <input onChange={handleUser} placeholder='Enter Your Username' type="email" />
                        <p className='error'>{userNameError}</p>
                        <br />
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

                        {
                            loading?
                        
                        <div  className='flex justify-center w-full px-4 py-2 font-bold text-white bg-blue-900 rounded-xl mt-8 mb-0'>
                        <ClipLoader/>
                        </div>

                        :

                        <button type='submit' className='loginButton'>register</button>

                        }
                        <Link to='/'><p className='text-sm font-normal text-black'>Already Have an Account ? <span className='text-white font-bold'>SignIn</span></p></Link>
                     </form>
                </div>
            </div>


        </>
  )
}

export default Register