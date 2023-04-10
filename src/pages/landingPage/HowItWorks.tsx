import React from 'react'
import { H2, H3, Grid } from '../../component'
import { TiTickOutline } from 'react-icons/ti'
import { how } from '../../assets/icons'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useWidth } from '../../hooks/useWidth'

const HowItWorks = () => {
    const width = useWidth()

    return (
        <div className=''>
            <div className='flex items-center justify-center'>
                <H2 title='How it works'
                    className='text-black-900 inline-block
                                text-center mt-10 border-b-2 border-pastel-green-800 pb-2
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
                                className='mb-2 mobileL:mb-1 font-bold text-black-950
                                mobileL:text-xl
                                '
                            />

                            <article className='flex items center text-xl
                             text-black-950 
                             mobileL:text-xl'>
                                <p><TiTickOutline /></p>
                                <p>Sign in with your Google Account.</p>
                            </article>
                        </div>

                        <div className='mb-4'>
                            <H3 title='Step 2:'
                                className='mb-2 
                                font-bold
                                mobileL:mb-1
                                mobileL:text-xl
                                text-black-950'
                            />
                            <article className='flex items center text-xl
                             text-black-950
                             mobileL:text-xl
                             '>
                                <div><TiTickOutline /></div>
                                {
                                    width > 768 ? <div>Click on the "Report Incident" button.</div> :
                                        <div className='flex items-center '> 
                                        <span>Click on the </span>
                                        <span className='ms-2 me-2'> <AiFillPlusCircle /> </span>
                                        <span>  button </span>
                                        </div>
                                }

                            </article>
                        </div>

                        <div className='mb-4'>
                            <H3 title='Step 3:'
                                className='mb-2 mobileL:mb-1 font-bold
                                mobileL:text-xl
                                text-black-950'
                            />
                            <article className='flex items center 
                            text-xl text-black-950
                            mobileL:text-xl
                            '>
                                <div><TiTickOutline /></div>
                                <div>Provide a brief description of the incident and click "Submit".</div>
                            </article>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <img src={how} alt='how' className='w-60 h-72 
                    tabletM:h-40 tabletM:w-40
                    
                    ' />
                </div>
            </Grid>

            <div className='mt-4 text-xl text-black-950'>
                <p>That's it! Our team will receive your
                    report and take appropriate action,
                    if necessary.
                </p>
            </div>
        </div>
    )
}

export default HowItWorks