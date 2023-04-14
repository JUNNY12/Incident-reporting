import React from 'react'
import { H1, Grid, Loader } from '../../../component'
import AllIncidentCard from './AllIncidentCard'
import useAllIncident from '../../../hooks/useAllIncident'
import { PuffLoader } from 'react-spinners'
import { SearchContext } from '../../../context/SearchContext'
import { useContext } from 'react'

const AllIncident = () => {

    const { searchState } = useContext(SearchContext)
    const { searchResults, query } = searchState
    const { incidents, loading } = useAllIncident()

    const displayedIncidents = query ? searchResults : incidents
    let content
    if (displayedIncidents.length === 0 && incidents.length > 0) (
        content = (
            <p className='flex items-center justify-center text-2xl'>
                oops!! No incident found
            </p>
        )
    )


    return (
        <div className='mb-10'>
            <H1
                title='All Incidents'
                className='text-black-950 mobileXL:text-center 
                 mobileXL:text-3xl font-bold'
            />
            <div>
                {content}
            </div>

            <Grid
                className='grid-cols-4 place-items-center gap-8
            laptopS:grid-cols-3 laptopS:gap-x-4
            tabletM:grid-cols-2
            mobileXL:grid-cols-1
            '
            >
                {displayedIncidents?.map((incident) => {
                    console.log(incident)
                    const { id, type, latitude, longitude, description, time, date, image, } = incident
                    return (
                        <AllIncidentCard
                            key={id}
                            id={id}
                            latitude={latitude}
                            longitude={longitude}
                            type={type}
                            time={time}
                            date={date}
                            image={image}
                            description={description}
                        />
                    )
                })}
            </Grid>

            {loading && <div className='flex items-center justify-center'> <PuffLoader color='#116a31' size={150} /></div>}

        </div>
    )
}

export default AllIncident