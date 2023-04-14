import React from 'react'
import { Button } from './Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { googleIcon } from '../assets/icons'
import { auth } from '../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { handleLogout, handleGoogleAuth } from '../auth'


interface SideProps {
  setShowSideBar: (value: boolean) => void
}


const SideBar = ({ setShowSideBar }: SideProps) => {

  const [user] = useAuthState(auth)

  const closeSideBar = () => {
    setShowSideBar(false)
  }
  const navigate = useNavigate()

  return (
    <div className='w-72 fixed h-full mobileL:w-60 font-myFont
    bg-mercury-white-100 text-pastel-green-800
    top-0 left-0 z-50
    '>
      <div className='absolute top-4 right-4'>
        <button className='bg-pastel-green-800 h-8 w-8
         text-mercury-white-50 font-bold
         rounded-sm flex items-center justify-center cursor-pointer'
          onClick={closeSideBar}
        >X</button>
      </div>

      <div className='pt-28 ps-8 text-2xl'>
        <ul>
          <li className='mb-6'>
            <NavLink to={'/'}>
              Home
            </NavLink>
          </li>

          <li className='mb-6'>
            <NavLink to={'/incident'}>
              Incidents
            </NavLink>
          </li>

          {
            user && (
              <li className='mb-6'>
                <NavLink to={'/report'}>
                  Report
                </NavLink>
              </li>
            )
          }

          <li className='mb-6'>
            <NavLink to={'/contact'}>
              Contact
            </NavLink>
          </li>

          {
            user && (
              <li className='absolute bottom-8'>
                <Button
                  onClick={handleLogout(navigate)}
                  arial-label='get started'
                  className='bg-pastel-green-800 
              text-mercury-white-50
              text-xl
              flex justify-center items-center pb-3
               hover:bg-pastel-green-600 w-[170px]'
                >
                  Log out
                </Button>
              </li>
            )
          }

          {
            !user && (
              <li className='absolute bottom-8'>
                <Button
                  onClick={handleGoogleAuth(navigate)}
                  arial-label='get started'
                  className='bg-pastel-green-800 
              text-mercury-white-50
              text-xl
              flex justify-center items-center pb-3
               hover:bg-pastel-green-600 w-[170px]'
                >
                  <img src={googleIcon} alt='google' className='mr-4 h-4 w-4' />
                  Get Started
                </Button>
              </li>
            )
          }

        </ul>
      </div>
    </div>
  )
}

export default SideBar