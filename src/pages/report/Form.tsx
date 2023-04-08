import React from 'react'
import { Input, Button, TextField } from '../../component'

interface FormProps {
    setShowForm: (value: boolean) => void
}

const Form = ({setShowForm}:FormProps) => {

    const closeForm = () => {
        setShowForm(false)
    }

    return (
        <div className='mt-10 bg-pastel-green-800
         w-[700px] p-12 absolute
         tabletS:w-[420px] mobileL:w-[320px] mobileM:w-[290px]
         top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
         '>
            <div>
                <Button className='absolute right-2 top-2 w-8 h-8 rounded-
                 bg-pastel-green-50 text-pastel-green-700 font-bold'
                 onClick={closeForm}
                 >X</Button>
            </div>
            <form action="">
                <div className='flex flex-col justify-center items-center'>
                    <div className='mb-3'>
                        <Input
                            type='text'
                            placeholder='type of incident'
                            className='w-[600px] h-12 tabletS:w-[400px] mobileL:w-[280px] '
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            type='file'
                            placeholder='upload image'
                            className='w-[600px] h-12 tabletS:w-[400px] mobileL:w-[280px]
                  rounded-md pt-2 ps-2 bg-mercury-white-50
                  focus:outline-none
                 focus:border-pastel-green-200
                  '
                        />
                    </div>

                    <div className='mb-3 text-pastel-green-50 text-xl font-bold'>Or</div>

                    <div className='mb-3'>
                        <Button className='w-[600px] font-bold
                text-pastel-green-800 bg-mercury-white-50
                 tabletS:w-[400px] mobileL:w-[280px]
                 '>Capture Image</Button>
                    </div>


                    <div className='mb-3'>
                        <TextField
                            placeholder='Brief Description'
                            type='text'
                            className='w-[600px] h-24 tabletS:w-[400px] mobileL:w-[280px]'
                        />
                    </div>

                    <div>
                        <Button className='w-[600px] font-bold
                text-pastel-green-800 bg-mercury-white-50
                 tabletS:w-[400px] mobileL:w-[280px]
                 '>Submit</Button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form