import React from 'react'
import { Grid, H2, Button } from '../../component'
import { googleIcon } from '../../assets/icons'
import { get } from '../../assets/icons'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import { handleGoogleAuth } from '../../auth'
import { useNavigate } from 'react-router'

const GetStarted = () => {

    const navigate = useNavigate()

    const [user] = useAuthState(auth)

    return (
        <div className='mt-8'>
            <div className='flex items-center justify-center'>
                <H2 title='Get Started'
                    className='text-black-950 inline-block mb-8
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
                <div className='order-last'>
                    <p className='text-xl text-black-950 
                    leading-normal
                    tabletM:leading-relaxed
                    '>
                        Sign up for our Incident Reporting Web App
                        today and start reporting incidents with just one click.
                        If you have any questions or need assistance,
                        our support team is here to help. Contact us anytime.
                    </p>

                    {
                        !user && (
                            <div className='mt-8'>
                                <Button
                                onClick={handleGoogleAuth(navigate)}
                                    arial-label='get started'
                                    className='text-mercury-white-50 bg-pastel-green-900 font-bold w-72
                                    mobileM:w-60
                                    hover:bg-pastel-green-600 
                                    '
                                >
                                    <img src={googleIcon} alt='google' className='mr-4 h-4 w-4' />
                                    Get Started
                                </Button>
                            </div>
                        )
                    }

                </div>
                <div>
                    <img src={get} alt='get started' className='w-60 h-72 
                    tabletM:h-40 tabletM:w-40' />
                </div>
            </Grid>

        </div>
    )
}

export default GetStarted