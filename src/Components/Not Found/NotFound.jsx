import React from 'react'
import Erroranimation from '../../../public/Animations/Erroranimation.json'
import Lottie from 'lottie-react'

const NotFound = () => {
    return (
        <>
            <div className='h-screen flex justify-center items-center flex-col bg-slate-950'>
                <div className="animatons">
                    <Lottie animationData={Erroranimation} />
                </div>
                <div className="texts">
                    <h1 className='h-10 font-bold text-3xl bg-red-800 rounded gap-7'>Sorry!!! This page is not defined</h1>
                </div>

            </div>


        </>
    )
}

export default NotFound