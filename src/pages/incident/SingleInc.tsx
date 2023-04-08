import React from 'react'
import { useParams } from 'react-router'
import { Button, Container, SharedLayout } from '../../component'
import { IncidentData } from '../../context/dataContext/DataContext'
import { IncidentProps } from '../../context/dataContext/DataContext'
import { imgHero } from '../../assets/images'
import { Map, Marker } from "pigeon-maps"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

const SingleInc = () => {
  const { id } = useParams()

  const newData: IncidentProps[] = IncidentData.filter((data) => {
    return data.id === Number(id)
  })
  const [coords, setCoords] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => console.log(error),
      { enableHighAccuracy: true }
    );
  }, []);


  console.log(coords.latitude)
  console.log(coords.longitude)


  console.log(newData[0]?.title)
  return (
    <section className='p-12 bg-pastel-green-200 
    mobileL:ps-8 mobileL:pe-8 h-screen
    tabletL:h-full
    ' >

      <div>
        <Link to='/incident'>
          <Button className='text-mercury-white-100 bg-pastel-green-800 w-40 hover:bg-pastel-green-50 hover:text-pastel-green-800 font-bold'>Go Back</Button>
        </Link>
      </div>

      <div className='mt-20 flex items-center justify-center gap-x-10 tabletS:flex-col relative'>
        <div className='w-[500px] h-[500px] tabletS:w-[300px] tabletS:h-[300px] mobileXL:w-[280px] mobileXL:h-[280px]'>
          <img src={imgHero} alt={newData[0]?.title} className='object-cover w-full h-full ' />
        </div>

        <div>
          <h1 className='text-4xl font-bold text-pastel-green-800 mb-4 tabletS:absolute tabletS:-top-12'>{newData[0]?.title}</h1>
          <p className='text-pastel-green-800 mb-4 text-xl'>{newData[0]?.description}</p>
          <div className='mt-4 bg-pastel-green-50 h-[250px] w-full mb-8'>
            <Map height={250} defaultCenter={[6.5994752, 3.3488896]} defaultZoom={16}>
              <Marker width={80} height={80} anchor={[6.5994752, 3.3488896]} />
            </Map>
          </div>
          <p className='text-pastel-green-800 text-xl'>Date: {newData[0]?.date}</p>
          <p className='text-pastel-green-800 text-xl'>Time: {newData[0]?.time}</p>
        </div>
      </div>

    </section>
  )
}

export default SingleInc
