import React from 'react'
import { Input } from '../../component'

const Filter = () => {
  return (
    <div className='flex items-center justify-center mb-8'>
        <Input
        type='search'
        placeholder='Search Incident'
        className='w-[600px] h-12 border
         border-black-950 bg-mercury-white-100
         text-black-950
         placeholder-black-950
         '
        />
    </div>
  )
}

export default Filter