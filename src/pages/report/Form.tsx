import React, { useRef } from 'react'
import { Input, Button, TextField } from '../../component'
import { getAllIncidents, getUserIncidents, postIncident } from '../../services'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import { IncidentType } from '../../context/userIncidentContext'
import { toast } from 'react-toastify'
import { storage } from '../../firebase/firebase'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { CircleLoader } from 'react-spinners'
import { sendNotification } from "../../services"
import ProgressBar from "@ramonak/react-progress-bar";
import useIncident from '../../hooks/useIncident'

interface FormProps {
    setShowForm: (value: boolean) => void

}

const Form = ({ setShowForm }: FormProps) => {

    //getting user id
    const [user] = useAuthState(auth)
    let uid: any = user?.uid


    //form data
    const [formData, setFormData] = React.useState<IncidentType>({
        type: '',
        image: '',
        date: '',
        time: '',
        description: '',
        latitude: 0,
        longitude: 0
    })

    const [imagePreview, setImagePreview] = React.useState<string>('')
    const [progress, setProgress] = React.useState<number>(0)
    const [loading, setLoading] = React.useState<boolean>(false)
    const { incidents, setIncidents } = useIncident()

    const handleChange = (e: any) => {
        const { name, value } = e.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const { type, description } = formData

    const fileRef = useRef<HTMLInputElement>(null)
    const handleImage = async (e: any) => {
        const file = fileRef.current?.files?.[0];
        if (!file) return;

        const storageRef = ref(storage, `incidentImage/${file.name}`)

        try {
            const downloadURL = await getDownloadURL(storageRef);
            toast.error('File with same name already exists!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
                hideProgressBar: true,
                closeButton: true,
                draggable: false,
                pauseOnHover: true,
                progress: undefined,
            });
            return;
        } catch (error) {
            // File does not exist, continue with upload
        }

        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress)
            console.log('Upload is ' + progress + '% done');
            if (progress === 100) {
                toast.success('Image uploaded successfully!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeButton: true,
                    draggable: false,
                    pauseOnHover: true,
                    progress: undefined,
                });
            }


        }, (error) => {
            console.log(error)
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setFormData(prevState => {
                    return {
                        ...prevState,
                        image: downloadURL
                    }
                    setImagePreview(downloadURL)
                })
            })
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        try {
            setLoading(true)
            //getting location
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            //getting date and time
            const now = new Date();
            const month = now.getMonth() + 1;
            const day = now.getDate();
            const year = now.getFullYear();
            const date = `${month}/${day}/${year}`;

            const isPm = now.getHours() >= 12 ? 'PM' : 'AM';
            const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
            const paddedHours = hours < 10 ? '0' + hours : hours;
            const minutes = now.getMinutes();
            const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
            const time = `${paddedHours}:${paddedMinutes} ${isPm}`;

            await postIncident(uid, {
                ...formData,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                date: date,
                time: time
            });

            //updating incident list
           const response:any = await getUserIncidents(uid)
            setIncidents(response)

            toast.success('Incident Reported Successfully', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            // console.log(formData);
            setLoading(false)
            closeForm();

            //sending notification
            await sendNotification(uid)
        } catch (error) {
            console.log(error);
        }
    };


    const closeForm = () => {
        setShowForm(false)
    }

    return (
        <div className='mt-10 bg-pastel-green-800 font-myFont
         w-[700px] p-12 fixed
         tabletS:w-[420px] mobileL:w-[320px] mobileM:w-[290px]
         top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
         '>
            <div>
                <Button className='absolute right-2 top-2 w-8 h-8 rounded-
                 bg-pastel-green-50 text-pastel-green-700 font-bold'
                    onClick={closeForm}
                >X</Button>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center'>
                    <div className='mb-3'>
                        <Input
                            type='text'
                            placeholder='type of incident'
                            className='w-[600px] h-12 tabletS:w-[400px] mobileL:w-[280px] '
                            required
                            name='type'
                            value={type}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            ref={fileRef}
                            onChange={handleImage}
                            type='file'
                            placeholder='upload image'
                            className='w-[600px] h-12 tabletS:w-[400px] mobileL:w-[280px]
                            rounded-md pt-2 ps-2 bg-mercury-white-50
                            focus:outline-none
                            focus:border-pastel-green-200
                  '
                        />
                    </div>
                    {
                        (progress > 0) && <div className='my-3'>
                            <ProgressBar completed={progress} width='250px' bgColor='#53ea87' labelAlignment='center' />
                        </div>
                    }

                    <div className='mb-3'>
                        <TextField
                            placeholder='Brief Description'
                            name='description'
                            value={description}
                            onChange={handleChange}
                            type='text'
                            className='w-[600px] h-24 tabletS:w-[400px] mobileL:w-[280px]'
                        />
                    </div>

                    <div>
                        <Button
                        disabled={progress === 100 ? false : true}
                        className='w-[600px] font-bold
                        text-pastel-green-800 bg-mercury-white-50
                        tabletS:w-[400px] mobileL:w-[280px]
                         '>
                            {loading ? <CircleLoader size={20} color='#116a31' /> : 'Report'}
                        </Button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form