import React from 'react'

const Empty = () => {
    return (
        <div className='flex items-center justify-center mt-20'>
            <div className='bg-pastel-green-800 text-mercury-white-50 p-4 rounded-sm
             text-2xl text-center
             w-[400px]
             mobileL:w-[280px]
             mobileL:text-lg
             font-bold
             '>
                No Incident Reported Yet
            </div>
        </div>
    )
}

export default Empty