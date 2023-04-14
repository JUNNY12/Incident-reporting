import { H2 } from '../../component'
import Empty from './Empty'
import useIncident from '../../hooks/useIncident'
import IncidentCard from './Card'
import { IncidentType } from '../../context/userIncidentContext'
import { Grid } from '../../component'
import { PuffLoader } from 'react-spinners'
import { useState } from 'react'

const IncidentReport = () => {
    const { incidents, loading } = useIncident()

    let empty ;
    if (incidents.length === 0 && incidents.length < 0) {
        empty = <Empty />
    }

    return (
        <div className='font-myFont'>
            <H2 title='Your Reports'
                className='text-pastel-green-800 inline-block text-center font-bold  mobileL:text-3xl'
            />
            <Grid
                className='grid-cols-4 place-items-center gap-8
            laptopS:grid-cols-3 laptopS:gap-x-4
            tabletM:grid-cols-2
            mobileXL:grid-cols-1' >

                {
                    incidents?.map((incident: IncidentType) => {
                        const { id, type, image } = incident
                        return (
                            <IncidentCard
                                key={id}
                                id={id}
                                type={type}
                                image={image}
                            />
                        )
                    })
                }
            </Grid>
            <div>
                {empty}
            </div>
            {loading && <div className='flex items-center justify-center'> <PuffLoader color='#116a31' size={150} /></div>} 
        </div>
    )
}

export default IncidentReport