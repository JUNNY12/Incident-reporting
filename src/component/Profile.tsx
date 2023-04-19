import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import { handleLogout } from '../auth'
import { FaUserCircle} from "react-icons/fa"
import { useNavigate } from 'react-router'

interface ProfileProps {
    setShowProfile:React.Dispatch<React.SetStateAction<boolean>>

}

export const Profile = ({setShowProfile}:ProfileProps) => {
    const [user] = useAuthState(auth)

    const name = user?.displayName
    const email = user?.email

    const navigate = useNavigate()

    let greeting;

    const date = new Date()
    const hours = date.getHours()

    if (hours < 12) {
        greeting = 'Good Morning'
    } else if (hours >= 12 && hours <= 17) {
        greeting = 'Good Afternoon'
    } else if (hours >= 17 && hours <= 24) {
        greeting = 'Good Evening'
    }

    return (
        <div className='w-[200px] bg-mercury-white-50 h-[200px] p-2 
        rounded-sm shadow-md shadow-mercury-white-800
        flex flex-col items-center z-10
        absolute right-4 top-20
        '>
            <div className='mb-4'>
                <FaUserCircle className='w-12 h-12 text-pastel-green-800' />
            </div>
            <h1 className='mb-1'>
                <span>{greeting} !!!</span>
            </h1>

            <div className='mb-4'>
                <span>{name || email}</span>
            </div>

            <div className='absolute right-2 top-2'>
                <button 
                title='close profile'
                onClick={() => setShowProfile(false)}
                className=' bg-pastel-green-800 text-mercury-white-50 
                h-[25px] w-[25px] rounded-sm flex items-center justify-center font-bold
                '>X</button>
            </div>

            <button
            onClick={handleLogout(navigate)}
            title='Logout'
            className='h-[35px] flex items-center justify-center w-full
             bg-pastel-green-800 text-mercury-white-50 rounded-sm
             hover:bg-mercury-white-50 hover:text-pastel-green-800 border-[1.5px] hover:border-pastel-green-800 
            hover:transition ease-in-out duration-300
             '>Logout</button>

        </div>
    )
}
