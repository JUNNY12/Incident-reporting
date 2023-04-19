import React from 'react'
import { H1, Card, Grid } from '../../../component'
import RecentCard from './RecentCard'
import useAllIncident from '../../../hooks/useAllIncident'
import { PuffLoader } from 'react-spinners'
import { SearchContext } from '../../../context/SearchContext'
import { useContext } from 'react'
import Empty from '../../report/Empty'

const Recent = () => {

    const { searchState } = useContext(SearchContext)
    const { searchResults, query } = searchState
    const { incidents, loading } = useAllIncident()

    const displayedIncidents = query ? searchResults : incidents

    let content
    if (displayedIncidents.length===0 && incidents.length > 0) (
        content = (
            <p className='flex items-center justify-center text-2xl'>
                oops!! No incident found
            </p>
        )
    )
    let empty ;
    if (incidents.length === 0 && incidents.length < 0) {
        empty = <Empty />
        console.log('nothing')
    }

    return (
        <div className='mb-10 mt-20'>
            <H1
                title='Recent Incidents'
                className='text-black-950 mobileXL:text-center mobileXL:text-3xl font-bold'
            />
            <div>
                {content}
            </div>

            <div className='overflow-auto flex snap-mandatory scrollbar-hide'>
                {displayedIncidents?.slice(0, 6).map((incident) => {

                    const { id, type, description, time, date, latitude, image, longitude } = incident
                    return (
                        <RecentCard
                            key={id}
                            id={id}
                            longitude={longitude}
                            type={type}
                            time={time}
                            date={date}
                            image={image}
                            latitude={latitude}
                            description={description}
                        />
                    )
                })}
            </div>
            {loading && <div className='flex items-center justify-center'> <PuffLoader color='#116a31' size={150} /></div>}

        </div>
    )
}

export default Recent