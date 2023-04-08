import React from 'react'
import { H1, Card, Grid } from '../../../component'
import AllIncidentCard from './AllIncidentCard'
import { IncidentData } from '../../../context/dataContext/DataContext'

const AllIncident = () => {
    return (
        <div className='mb-10'>
            <H1
                title='All Incidents'
                className='text-pastel-green-100 mobileXL:text-center  mobileXL:text-3xl font-bold' 
            />

            <Grid
            className='grid-cols-4 place-items-center gap-8
            laptopS:grid-cols-3 laptopS:gap-x-4
            tabletM:grid-cols-2
            mobileXL:grid-cols-1
            '
            >
                {IncidentData.slice(0,4).map((incident) => {

                    const { id, title, description, time, date, location, image, status } = incident
                    return (
                        <AllIncidentCard
                            key={id}
                            id={id}
                            status={status}
                            title={title}
                            time={time}
                            date={date}
                            image={image}
                            location={location}
                            description={description}
                        />
                    )
                })}
            </Grid>

        </div>
    )
}

export default AllIncident