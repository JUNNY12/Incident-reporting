import React from 'react'
import { H2, H3, Grid } from '../../component'
import { TiTickOutline } from 'react-icons/ti'
import { how } from '../../assets/icons'

const HowItWorks = () => {
    return (
        <div className='mt-8'>
            <div className='flex items-center justify-center'>
                <H2 title='How it works'
                    className='text-mercury-white-50 inline-block
                                text-center mt-10 border-b-2 border-pastel-green-200 pb-2
                                mobileL:text-3xl
                            '
                            
                />
            </div>
            <Grid
            className='place-items-center
            gap-24 grid-cols-2
            tabletM:grid-cols-1
            tabletM:gap-2
            '
            >
                <div className='tabletM:order-last'>
                    <div>
                        <div className='mb-4'>
                            <H3 title='Step 1:'
                                className='mb-2 mobileL:mb-1 font-bold'
                            />

                            <p className='flex items center text-xl
                             text-mercury-white-50 
                             mobileL:text-xl'>
                                <div><TiTickOutline /></div>
                                <div>Sign in with your Google Account.</div>
                            </p>
                        </div>

                        <div className='mb-4'>
                            <H3 title='Step 2:'
                                className='mb-2 
                                font-bold
                                mobileL:mb-1
                                '
                            />
                            <p className='flex items center text-xl
                             text-mercury-white-50
                             mobileL:text-xl
                             '>
                                <div><TiTickOutline /></div>
                                <div>Click on the "Report Incident" button.</div>
                            </p>
                        </div>

                        <div className='mb-4'>
                            <H3 title='Step 3:'
                                className='mb-2 mobileL:mb-1 font-bold'
                            />
                            <p className='flex items center 
                            text-xl text-mercury-white-50
                            mobileL:text-xl
                            '>
                                <div><TiTickOutline /></div>
                                <div>Provide a brief description of the incident and click "Submit".</div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <img src={how} alt='how' className='w-60 h-72 
                    tabletM:h-40 tabletM:w-40
                    
                    ' />
                </div>
            </Grid>

            <div className='mt-4 text-xl text-mercury-white-50'>
                <p>That's it! Our team will receive your
                    report and take appropriate action,
                    if necessary.
                </p>
            </div>
        </div>
    )
}

export default HowItWorks