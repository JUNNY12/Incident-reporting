import { H2 } from '../../component'
import Empty from './Empty'
import useIncident from '../../hooks/useIncident'
import IncidentCard from './Card'
import { IncidentType } from '../../context/userIncidentContext'
import { Grid } from '../../component'
import { PuffLoader } from 'react-spinners'
import { usePagination } from '../../hooks/usePagination'
import ReactPaginate from 'react-paginate'

const IncidentReport = () => {
    const { incidents, loading } = useIncident()
    const { currentIncidents, pageCount, handlePageClick, currentPage } = usePagination({ incidents })

    let empty;
    if (incidents.length === 0 && incidents.length < 0) {
        empty = <Empty />
    }

    return (
        <div className='font-myFont'>
            {
                currentPage === 0 ? ' ' :
                    <div className='text-3xl mb-4'>(Page {currentPage + 1} / {pageCount})</div>
            }
            <H2 title='Your Reports'
                className='text-pastel-green-800 inline-block text-center font-bold  mobileL:text-3xl'
            />
            <Grid
                className='grid-cols-4 place-items-center gap-8
            laptopS:grid-cols-3 laptopS:gap-x-4
            tabletM:grid-cols-2
            mobileXL:grid-cols-1' >

                {
                    currentIncidents?.map((incident: IncidentType) => {
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

export default IncidentReport