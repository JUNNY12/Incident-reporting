import React from 'react'
import { H1, Grid, Loader } from '../../../component'
import AllIncidentCard from './AllIncidentCard'
import useAllIncident from '../../../hooks/useAllIncident'
import { PuffLoader } from 'react-spinners'
import { SearchContext } from '../../../context/SearchContext'
import { useContext } from 'react'
import Empty from '../../report/Empty'
import { usePagination } from '../../../hooks/usePagination'
import ReactPaginate from 'react-paginate';


const AllIncident = () => {

    const { searchState } = useContext(SearchContext)
    const { searchResults, query } = searchState

    const { incidents, loading } = useAllIncident()

    const { currentIncidents, pageCount, handlePageClick, currentPage } = usePagination({ incidents, perPage: 8 })


    const displayedIncidents = query ? searchResults : currentIncidents

    let content
    if (displayedIncidents.length === 0 && incidents.length > 0) (
        content = (
            <p className='flex items-center justify-center text-2xl'>
                oops!! No incident found
            </p>
        )
    )

    let empty;
    if (incidents.length === 0 && incidents.length < 0) {
        empty = <Empty />
    }

    return (
        <div className='mb-10'>
            {
                currentPage === 0 ? ' ' :
                    <div className='text-3xl mb-4 absolute top-[180px]'>(Page {currentPage + 1} / {pageCount})</div>
            }
            <H1
                title='All Incidents'
                className='text-black-950 mobileXL:text-center 
                 mobileXL:text-3xl font-bold'
            />
            <div>{empty}</div>
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
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName='flex items-center justify-center rounded-sm mt-16 bg-pastel-green-600 text-mercury-white-50 h-[45px]'
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                breakLabel='...'
                nextLabel="next"
                nextClassName='border-2 border-mercury-white-50 rounded-sm p-1 ms-2 '
                previousClassName='border-2 border-mercury-white-50 rounded-sm p-1 ms-2'
                previousLabel="prev "
                pageClassName='m-3'
                activeLinkClassName='border-2 border-pastel-green-600 rounded-full h-[30px] w-[30px] inline-flex items-center justify-center  p-2 text-pastel-green-600 bg-mercury-white-50'
            />
        </div>
    )
}

export default AllIncident