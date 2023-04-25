import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlinePhone } from 'react-icons/ai'
import { FaFax } from 'react-icons/fa'
import { RiMailSendLine } from 'react-icons/ri'
import { SharedLayout, Container, Flex, H2, Input, TextField, Button } from '../../component'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import { BeatLoader } from 'react-spinners'


const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)
    const templateParams = {
      from_name:name,
      from_email:email,
      message:message
    }
    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setFormData({
          name: '',
          email: '',
          message: '',
        })
        toast.success('Message sent successfully', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

        setLoading(false)
      })
      .catch((error) => {
        console.log(error.text);
      });



    // console.log(formData)
  }
  return (
    <SharedLayout>

      <Container
        className='pt-28 pb-16
        '
      >
        <div className='relative flex flex-col items-center justify-center
        tabletM:gap-x-10 
        tabletM:flex-col-reverse
        
        '>
          <Flex className='items-center justify-center gap-10 
           tabletM:flex-wrap
           '>
            <div className='h-40 w-40 bg-mercury-white-100
            z-10 flex relative cursor-pointer
             items-center justify-center 
             flex-col p-4 text-center text-pastel-green-800 font-bold
             mobileL:w-72
             tabletM:mb-6
             tabletM:mt-6
             '>
              <div className='text-4xl absolute top-2 mobileL:text-5xl'><IoLocationOutline /></div>
              <div className=' text-lg mobileL:text-2xl mt-8'>Our Office</div>
              <div className='text-sm mobileL:text-lg mobileL:font-thin'>45, lorem street, Ipsum State</div>

            </div>

            <div className='h-40 w-40 bg-mercury-white-100
             z-10 flex
             items-center justify-center relative cursor-pointer
             flex-col p-4 text-center text-pastel-green-800 font-bold
             mobileL:w-72
             tabletM:mb-6
             '>
              <div className='text-4xl absolute top-1 mobileL:text-5xl'><AiOutlinePhone /></div>
              <div className=' text-lg mt-8 mobileL:text-2xl'>Phone</div>
              <div className='text-sm mobileL:text-lg mobileL:font-thin'>
                <a href='tel:+234 123 456 789' >+234 123 456 789</a>
              </div>
            </div>

            <div className='h-40 w-40 bg-mercury-white-100
             z-10 flex
             items-center justify-center  relative cursor-pointer
             flex-col p-4 text-center text-pastel-green-800 font-bold
             mobileL:w-72
             tabletM:mb-6
             '>
              <div className='text-4xl absolute top-2  mobileL:text-5xl' ><FaFax /></div>
              <div className=' text-lg mt-8 mobileL:text-2xl'>Fax</div>
              <div className='text-sm mobileL:text-lg mobileL:font-thin'>
                <a href='tel:+234 123 456 789' >+234 123 456 789</a>
              </div>
            </div>

            <div className='h-40 w-40 bg-mercury-white-100
             z-10 flex
             items-center justify-center relative cursor-pointer
             flex-col p-4 text-center text-pastel-green-800 font-bold
             mobileL:w-72
             tabletM:mb-6
             '>
              <div className='text-4xl absolute top-2 mobileL:text-5xl'><RiMailSendLine /></div>
              <div className='textl-lg mt-8 mobileL:text-2xl'>Email</div>
              <div className='text-sm mobileL:text-lg mobileL:font-thin'>
                <a href='mailto:reportingapp.info' >reportingapp.info</a>
              </div>
            </div>
          </Flex>

          <Flex className='items-center justify-center tabletM:mt-10'>
            <div className='w-96 bg-pastel-green-800 
            -mt-10 p-8
            tabletM:mt-10
            tabletM:p-10
            mobileL:w-72
            mobileL:-mt-6
            tabletM:mb-6
            tabletM:pt-20
            ' >
              <H2
                title='Contact Us'
                className='text-mercury-white-50 text-center mt-10
                tabletM:-mt-10
                tabletM:font-bold
                tabletS:text-5xl
                mobileL:text-3xl
                '
              />
              <form onSubmit={handleSubmit} className='flex items-center 
              justify-center flex-col'>
                <div className='mb-4'>
                  <Input
                    name='name'
                    value={name}
                    onChange={handleChange}
                    type='text'
                    placeholder='Enter Your Name'
                    className='w-80  mobileL:w-60 
                  '
                    required
                  />
                </div>

                <div className='mb-4'>
                  <Input
                    name='email'
                    value={email}
                    onChange={handleChange}
                    className='w-80  mobileL:w-60'
                    type='email'
                    placeholder='Enter Your Email'
                    required
                  />
                </div>

                <div className='mb-4'>
                  <TextField
                    name='message'
                    value={message}
                    onChange={handleChange}
                    placeholder='Enter Your Message'
                    type='text'
                    className='w-80  mobileL:w-60'
                  />
                </div>

                <Button
                  className='text-pastel-green-800 bg-mercury-white-50 font-bold w-80
                 p-[1.7rem] rounded-md
                hover:bg-pastel-green-50 hover:text-pastel-green-800
                  hover:transition ease-in-out duration-300
                mobileL:w-60
                 '
                >
                  {
                    loading ?
                      <span className='inline-flex justify-center items-center'>
                        <span className='me-3'>Sending</span>
                        <span><BeatLoader size={10} color='#116a31' /></span>

                      </span>
                      :
                      <span>Send Message</span>
                  }
                </Button>

              </form>
            </div>
          </Flex>
        </div>

      </Container>

    </SharedLayout>

  )
}

export default Contact