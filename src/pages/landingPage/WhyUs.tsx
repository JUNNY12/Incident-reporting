import React from 'react'
import { H2, Card, Grid } from '../../component'
import {AiOutlineThunderbolt, AiFillLock, AiFillBell} from 'react-icons/ai'
import {FcStatistics} from 'react-icons/fc'

const Data = [
    {
        id: 1,
        title: 'Fast and Easy Reporting',
        description: 'Report incidents with just one click, without the need to fill out lengthy forms.',
        icon: <AiOutlineThunderbolt />
    },
    {
        id: 2,
        title: 'Secure and Private',
        description: 'Your data is safe with us. We use the latest security technologies to ensure your data is safe.',
        icon: <AiFillLock />
    },
    {
        id: 3,
        title: 'Flexible Reporting Options',
        description: 'Our web app allows you to report incidents from anywhere, at any time.',
        icon: <FcStatistics />
    },
    {
        id: 4,
        title: 'Real-Time Incident Updates:',
        description: 'Stay up-to-date on the latest incidents in your area with our real-time incident updates feature.',
        icon: <AiFillBell />
    }
]

const WhyUs = () => {
    return (
        <div className='relative mt-8'>
            <div className='flex items-center justify-center'>
                <H2 title='Why Us'
                    className='text-black-950 inline-block mb-8
            text-center mt-10 border-b-2 border-pastel-green-800 pb-2
            mobileL:text-3xl
            '
                />
            </div>

            <div className='mt-6'>
                <Grid 
                className='place-items-center gap-x-24 grid-cols-2
                tabletM:grid-cols-1
                '
                
                >
                    {
                        Data.map((item) => {
                            const{ id, title, description, icon } = item
                            return (
                                <Card
                                className='w-96 h-60 relative bg-mercury-white-100
                                text-black-950
                                mobileL:w-72
                                mb-16
                                hover:bg-pastel-green-600
                                hover:text-mercury-white-50
                                transition-all duration-300 ease-in-out

                                '
                                key={id}>
                                    <h2 className='text-center text-2xl mb-6 mt-6 mobileM:text-xl'> {title}</h2>
                                    <p className='text-lg'>{description}</p>
                                    <div className='text-3xl w-20 h-20 rounded-full
                                     bg-pastel-green-800
                                     text-mercury-white-50
                                     flex items-center justify-center
                                     absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                     '>
                                        {icon}
                                    </div>
                                </Card>
                            )
                        })
                    }
                </Grid>
            </div>

        </div>
    )
}

export default WhyUs