import React from 'react'
import { Input } from '../../component'

const Filter = () => {
  return (
    <div className='flex items-center justify-center mb-8'>
        <Input
        type='search'
        placeholder='Search Incident'
        className='w-[600px] h-12'
        />
    </div>
  )
}

export default Filter