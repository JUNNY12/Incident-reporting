import React from 'react'
import { Input } from '../../component'
import { SearchContext } from '../../context/SearchContext'
import { useContext } from "react"
import useAllIncident from '../../hooks/useAllIncident'



const Filter = () => {
  const { searchState, searchDispatch } = useContext(SearchContext)
  const { incidents, loading } = useAllIncident()
  const { query } = searchState

  //handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newQuery = e.target.value
    const { query } = searchState
    searchDispatch({ type: 'SET_QUERY', payload: newQuery })

    const keys = ['type', 'description', 'date', 'time']

    let filteredIncidents = incidents || [];

    if (newQuery !== '') {
      filteredIncidents = incidents.filter((incident) => {
        return keys.some((key) => {
          return incident[key].toLowerCase().includes(query.toLowerCase())
        })
      });
    }

    //dispatch search results
    searchDispatch({ type: 'SEARCH_RESULTS', payload: filteredIncidents })
  }

  return (
    <div className='flex items-center justify-center mb-8'>
      <Input
        onChange={handleInputChange}
        type='search'
        value={query}
        placeholder='Search Incident'
        className='w-[600px] h-12 border
        border-black-950 bg-mercury-white-100
        text-black-950
        placeholder-black-950
        font-myFont
        '
      />
    </div>
  )
}

export default Filter
