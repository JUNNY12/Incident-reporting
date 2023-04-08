import React from 'react'
import { H2 } from '../../component'
import Empty from './Empty'

const IncidentReport = () => {
    return (
        <div>
            <H2 title='Incident Reports'
                className='text-pastel-green-800 inline-block
                                text-center
                                font-bold
                                mobileL:text-3xl
                            '

            />

            <div>
                <Empty />
            </div>
        </div>
    )
}

export default IncidentReport