import React from 'react'
import { SharedLayout, Container, Grid, H1, Button } from '../../component'
import WhyUs from './WhyUs'
import HowItWorks from './HowItWorks'
import GetStarted from './GetStarted'
import Hero from './Hero'

const LandingPage = () => {
  return (
    <SharedLayout>

      <Container className='bg-mercury-white-50' >
        <div>
          <Hero />
        </div>

        <div>
          <WhyUs />
        </div>

        <div>
          <HowItWorks />
        </div>
        <div>
          <GetStarted />
        </div>
      </Container>
    </SharedLayout>
  )
}

export default LandingPage