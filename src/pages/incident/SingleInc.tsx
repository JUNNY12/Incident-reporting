import React from 'react'
import { useParams, useNavigate } from 'react-router'
import { Button } from '../../component'
import { IncidentType } from '../../context/userIncidentContext'
import { Map, Marker } from "pigeon-maps"
import useAllIncident from '../../hooks/useAllIncident'
import { getAllIncidents } from '../../services'
import { useEffect } from 'react'



interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

const SingleInc = () => {
  const { id } = useParams()
  const { incidents, setIncidents } = useAllIncident()

  useEffect(() => {
    const fetchIncidents = async () => {
      const fetchedIncidents = await getAllIncidents();

      if (!fetchedIncidents) return;
      setIncidents(fetchedIncidents);
    };
    fetchIncidents();
  }, [id])

  // console.log(id)

  const navigate = useNavigate()

  const newData: IncidentType[] = incidents?.filter((data: IncidentType) => {
    return data.id === (id)
  })

  console.log(newData[0]?.latitude, newData[0]?.longitude)


  const latitude = newData[0]?.latitude;
  const longitude = newData[0]?.longitude;

  return (
    <section className='p-12 bg-mercury-white-50 font-myFont
    mobileL:ps-8 mobileL:pe-8 h-screen
    tabletL:h-full
    ' >


      <div onClick={() => navigate(-1)} className='w-40 inline-block'>
        <Button className='text-mercury-white-100 bg-pastel-green-800 w-40 hover:bg-pastel-green-600  font-bold'>Go Back</Button>
      </div>


      <div className='mt-20 flex items-center justify-center gap-x-10 tabletS:flex-col relative'>
        <div className='w-[500px] h-[500px] tabletS:w-[300px] tabletS:h-[300px] object-cover mobileXL:w-[280px] mobileXL:h-[280px]'>
          <img src={newData[0]?.image} alt={newData[0]?.type} className='object-cover w-full h-full ' />
        </div>

        <div className=' w-1/2 tabletS:w-full'>
          <h1 className='text-4xl font-bold text-black-950 mb-4 tabletS:absolute tabletS:-top-12'>{newData[0]?.type}</h1>
          <p className='text-black-950 my-8 text-xl'>{newData[0]?.description}</p>
          {(latitude && longitude) && (
            <div className='mt-4 bg-pastel-green-50 h-[250px] w-full mb-8'>
              <Map height={250} defaultCenter={[latitude, longitude]} defaultZoom={16}>
                <Marker width={80} height={80} anchor={[latitude, longitude]} />
              </Map>
            </div>
          )}
          <p className='text-black-950 text-xl'>Date: {newData[0]?.date}</p>
          <p className='text-black-950 text-xl'>Time: {newData[0]?.time}</p>
        </div>
      </div>

    </section>
  )
}

export default SingleInc
