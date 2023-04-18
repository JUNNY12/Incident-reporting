import React from 'react'
import { Card, H2 } from '../../../component'
import { Link } from 'react-router-dom'
import { IncidentType } from '../../../context/userIncidentContext'
import { CircleLoader } from 'react-spinners'

const RecentCard = ({ id, type, image }: IncidentType) => {
    const [isLoaded, setIsLoaded] = React.useState(false)

    const handleImageLoaded = () => {
        setIsLoaded(true)
    }
    return (
        <div>
            <Card
                className='w-60 h-80 mb-6 object-cover relative shadow-md me-10
                tabletXS:w-52 tabletXS:h-52
                mobileXL:w-72 mobileXL:h-72 group flex-shrink-0 snap-start scroll-smooth
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
                <div className='mt-8 '>
                    <div>
                        <H2
                            className='text-black-950 text-xl'
                            title={type}
                        />
                    </div>
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

export default RecentCard