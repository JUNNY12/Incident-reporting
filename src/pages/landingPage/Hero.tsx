import React from 'react'
import { imgHero } from '../../assets/images'
import { googleIcon } from '../../assets/icons'
import { Grid, H1, Button } from '../../component'
import { handleGoogleAuth } from '../../auth/handleGoogleAuth'
import { useNavigate } from 'react-router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'

const Hero = () => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    return (
        <div>
            <Grid
                className='
            place-items-center
            gap-8 
            tabletM:grid-cols-1
            '
            >
                <div>
                    <H1 title='Report incidents seamlessly with our cutting-edge web app'
                        className='
                        text-black-950
                        tabletS:text-4xl
                        tabletS:leading-tight 
                        mobileM:text-3xl
                        mobileM:leading-tight
                        font-bold
                         '
                    />
                    <p className='text-xl text-black-950'>
                        Effortlessly report incidents with
                        our simple one-click reporting feature.
                        Sign in to your Google Account and begin reporting incidents now.
                    </p>

                    {
                        !user && (
                            <div className='mt-8'>
                                <Button
                                    arial-label='Sign in with Google'
                                    className='bg-pastel-green-800 text-mercury-white-50 font-bold w-72
                            mobileM:w-60
                            hover:bg-pastel-green-600 
                            '
                                    onClick={handleGoogleAuth(navigate)}
                                >
                                    <img src={googleIcon} alt='google' className='mr-4 h-4 w-4' />
                                    Sign in with Google
                                </Button>
                            </div>
                        )
                    }

                    <div className='flex items-center mt-10 text-3xl
                     font-bold
                     tabletS:text-2xl
                     mobileM:text-3xl
                     text-black-950
                     '

                    >
                        <div className='font-bold mr-12'>
                            <div>20 +</div>
                            <div>Users</div>
                        </div>

                        <div className='font-bold'>
                            <div >100+</div>
                            <div>
                                <span className='mr-2'>Incidents</span>
                                <span className='mobileM:hidden'>Reported</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='tabletM:hidden'>
                    <img src={imgHero} className='w-full' alt='hero' />
                </div>
            </Grid>
        </div>
    )
}

export default Hero