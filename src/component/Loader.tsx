import React from 'react'
import { PuffLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='bg-mercury-white-50 h-screen flex justify-center items-center'>
        <PuffLoader color='#116a31' size={150} />
    </div>
  )
}

export default Loader