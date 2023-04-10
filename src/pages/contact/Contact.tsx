import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlinePhone } from 'react-icons/ai'
import { FaFax } from 'react-icons/fa'
import { RiMailSendLine } from 'react-icons/ri'
import { SharedLayout, Container, Flex, H2, Input, TextField, Button } from '../../component'


const Contact = () => {
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
              <form action="" className='flex items-center 
              justify-center flex-col'>
                <div className='mb-4'>
                  <Input
                    type='text'
                    placeholder='Enter Your Name'
                    className='w-80  mobileL:w-60 
                  '
                    required
                  />
                </div>

                <div className='mb-4'>
                  <Input
                    className='w-80  mobileL:w-60'
                    type='email'
                    placeholder='Enter Your Email'
                    required
                  />
                </div>

                <div className='mb-4'>
                  <TextField
                    placeholder='Enter Your Message'
                    type='text'
                    className='w-80  mobileL:w-60'
                  />
                </div>

                <Button
                  className='text-pastel-green-800 bg-mercury-white-50 font-bold w-80
                 p-6 rounded-md
                hover:bg-pastel-green-50 hover:text-pastel-green-800
                  hover:transition ease-in-out duration-300
                mobileL:w-60
                 '
                >
                  Send Message
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