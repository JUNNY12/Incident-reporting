import React from 'react'
import { PuffLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='bg-pastel-green-700 h-screen flex justify-center items-center'>
        <PuffLoader color='#fff' size={150} />
    </div>
  )
}

export default Loader