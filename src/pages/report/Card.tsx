import React from 'react'
import { Card, H2 } from '../../component'
import { Link } from 'react-router-dom'
import { IncidentType } from '../../context/userIncidentContext'
import { CircleLoader } from 'react-spinners'
import { BsFillTrashFill } from "react-icons/bs"
import { deleteIncident } from '../../services'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import { toast } from 'react-toastify'
import { deleteObject, ref } from '@firebase/storage'
import { storage } from '../../firebase/firebase'
import useIncident from '../../hooks/useIncident'


const IncidentCard = ({ id, type, image, time }: IncidentType) => {
    const [isLoaded, setIsLoaded] = React.useState(false)

    const { setIncidents } = useIncident()

    const [user] = useAuthState(auth)
    const uid = user?.uid

    const handleImageLoaded = () => {
        setIsLoaded(true)
    }

    const removeImage = async (image: any) => {
        const imageRef = ref(storage, image)
        await deleteObject(imageRef)
    }

    const handleDelete = async (id: string | undefined, image: any) => {
        try {
            await deleteIncident(uid, id)
            await removeImage(image)
            toast.success('Incident deleted successfully', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })

            setIncidents(prevState => {
                return prevState.filter(item => item.id !== id)
            })

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Card
                className='w-60 h-80 mb-6 object-cover relative shadow-xl 
                tabletXS:w-52 tabletXS:h-52
                mobileXL:w-72 mobileXL:h-80 group
                '
            >

                <img
                    onLoad={handleImageLoaded}
                    src={image} alt="" className={`w-full h-48 object-cover tabletXS:h-32
                    mobileXL:h-44 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}

                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    {
                        !isLoaded && (
                            <CircleLoader size={100} color='#0dac45' />
                        )
                    }
                </div>
                <div className='mt-8 '>
                    <div>
                        <H2
                            className='text-black-950 text-xl'
                            title={type}
                        />
                    </div>
                    <div>{time}</div>
                    <div role='button' className=' hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in-out'>
                        <Link to={`/inc/${id}`} className='bg-pastel-green-600 rounded-sm text-mercury-white-50 w-[40px] h-[10px] p-2'>
                            View
                        </Link>
                    </div>
                </div>

                <div
                    onClick={() => handleDelete(id, image)}
                    className=' absolute bottom-4 right-4 text-2xl text-pastel-green-600' title='delete' aria-label='delete button'>
                    <BsFillTrashFill />
                </div>

            </Card>
        </div>
    )
}

export default IncidentCard