import React from 'react'
import { Card, H2 } from '../../../component'
import { IncidentProps } from '../../../context/dataContext/DataContext'
import { AiFillEye } from "react-icons/ai"
import { Link } from 'react-router-dom'

const RecentCard = ({ id, title, image}: IncidentProps) => {
    return (
        <div>
            <Card
                className='w-60 h-60 mb-6 object-cover relative shadow-xl 
                tabletXS:w-52 tabletXS:h-52
                mobileXL:w-72 mobileXL:h-72
                '
            >
                <img src={image} alt="" className='w-full h-36 
                tabletXS:h-32
                mobileXL:h-44
                ' />
                <div className='flex justify-between items-center'>
                    <H2
                        className='text-black-950 text-[24px] mt-3'
                        title={title}
                    />
                    <div>
                       <Link to={`/inc/${id}`}>
                            <AiFillEye className='text-black-950 text-[28px] cursor-pointer' />
                       </Link>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default RecentCard