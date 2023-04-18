import React from 'react'
import { Card, H2 } from '../../component'
import { AiFillEye } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { IncidentType } from '../../context/userIncidentContext'
import { CircleLoader } from 'react-spinners'

const IncidentCard = ({ id, type, image }: IncidentType) => {
    const [isLoaded, setIsLoaded] = React.useState(false)

    const handleImageLoaded = () => {
        setIsLoaded(true)
    }
    return (
        <div>
            <Card
                className='w-60 h-80 mb-6 object-cover relative shadow-xl 
                tabletXS:w-52 tabletXS:h-52
                mobileXL:w-72 mobileXL:h-72 group
                '
            >

                <img
                    onLoad={handleImageLoaded}
                    src={image} alt="" className={`w-full h-48 object-cover tabletXS:h-32
                    mobileXL:h-44 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}

                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {
                        !isLoaded && (
                            <CircleLoader size={100} color='#0dac45' />
                        )
                    }
                </div>
                <div className='mt-8'>
                    <H2
                        className='text-black-950 text-[24px] mt-3'
                        title={type}
                    />
                    <div role='button' className=' hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in-out'>
                        <Link to={`/inc/${id}`} className='bg-pastel-green-600 rounded-sm text-mercury-white-50 w-[40px] h-[10px] p-2'>
                            View
                        </Link>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default IncidentCard