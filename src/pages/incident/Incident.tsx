import React from 'react'
import { Container, SharedLayout } from '../../component'
import Recent from './recent/Recent'
import AllIncident from './allincident/AllIncident'
import Filter from './Filter'


const Incident = () => {
  return (
   <SharedLayout>
      <Container className='pt-24 bg-mercury-white-50 '>
        <Filter />
        <Recent />
        <AllIncident />
      </Container>
      
    </SharedLayout>
  )
}

export default Incident