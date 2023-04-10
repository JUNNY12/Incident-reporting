import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer className='bg-mercury-white-100 p-12
    mobileL:ps-8 mobileL:pe-8 
    '>
        <div className='flex items-center justify-center'>
            <div className=' hover:text-pastel-green-600 transition ease-in-out duration-300 mr-6 text-5xl text-black-950 cursor-pointer'>
                <AiFillFacebook />
            </div>

            <div className=' hover:text-pastel-green-600 transition ease-in-out duration-300 mr-6 text-5xl text-black-950 cursor-pointer'>
                <AiFillInstagram />
            </div>

            <div className=' hover:text-pastel-green-600 transition ease-in-out duration-300 mr-6 text-5xl text-black-950 cursor-pointer'>
                <AiFillTwitterCircle />
            </div>
            <div className=' hover:text-pastel-green-600 transition ease-in-out duration-300 mr-6 text-5xl text-black-950 cursor-pointer '>
                <AiFillLinkedin />
            </div>
        </div>

        <div className='mt-8'>
            <ul className='flex items-center justify-center text-black-950 text-2xl
            mobileL:flex-col 
            '>
                <li className='mr-6 border-r-2 border-r-black-950 pr-4 
                 hover:text-pastel-green-600 transition ease-in-out duration-300
                 mobileL:border-r-0
                 mobileL:mr-0
                 mobileL:pr-0
                 mobileL:mb-2
                 ' >
                    <Link to={`/contact`}>Contact</Link>
                </li>

                <li className='mr-6 border-r-2 border-r-black-950 pr-4 
                 hover:text-pastel-green-600 transition ease-in-out duration-300
                 mobileL:border-r-0
                 mobileL:mr-0
                 mobileL:pr-0
                 mobileL:mb-2
                 '>
                    <Link to={`/incident`}>Incident</Link>
                </li>

                <li className='mr-6 hover:text-pastel-green-600 
                transition ease-in-out duration-300
                mobileL:mr-0
                '>
                    <Link to={'/report'}>Report</Link>
                </li>
            </ul>
        </div>

        <div className='flex justify-center items-center mt-8 text-2xl
         text-black-950
         font-bold
         mobileL:text-lg
         mobileL:font-bold
   
         '>
            <span className='mr-2'> Reporting Web App </span>
            <span className='mr-2'> &copy; </span>
            <span className='mr-2'> {year} </span>
        </div>

    </footer>
  )
}

export default Footer