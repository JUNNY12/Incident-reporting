import React from 'react'
import { Button } from './Button'
import { Link, NavLink } from 'react-router-dom'
import { googleIcon } from '../assets/icons'

interface SideProps {
  setShowSideBar: (value: boolean) => void
}


const SideBar = ({ setShowSideBar }: SideProps) => {

  const closeSideBar = () => {
    setShowSideBar(false)
  }
  return (
    <div className='w-72 fixed h-full mobileL:w-60
    bg-pastel-green-100 text-pastel-green-800
    top-0 left-0 z-50
    '>
      <div className='absolute font-bold flex items-center justify-center top-4 right-4'>
        <Button className=' bg-pastel-green-800 w-8 h-8  text-mercury-white-50 '
          onClick={closeSideBar}
        >X</Button>
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

          <li className='mb-6'>
            <NavLink to={'/report'}>
              Report
            </NavLink>
          </li>

          <li className='mb-6'>
            <NavLink to={'/contact'}>
              <Button className='bg-pastel-green-800 text-mercury-white-50 w-32'>
                Contact
              </Button>
            </NavLink>
          </li>

          <li className='absolute bottom-8'>
            <Button className='bg-pastel-green-800 text-mercury-white-50 w-32'>
              Logout
            </Button>
          </li>

          <li className='absolute bottom-8'>
            <Button
              arial-label='get started'
              className='bg-mercury-white-50 text-pastel-green-900  w-44 hover:text-pastel-green-900'
            >
              <img src={googleIcon} alt='google' className='mr-4 h-4 w-4' />
              Get Started
            </Button>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default SideBar