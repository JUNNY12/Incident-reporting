import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlinePhone } from 'react-icons/ai'
import { FaFax } from 'react-icons/fa'
import { RiMailSendLine } from 'react-icons/ri'
import { SharedLayout, Container, Flex, H2 } from '../../component'


const Contact = () => {
  return (
    <SharedLayout>

      <Container
        className='pt-16'
      >
        <div className='relative'>
          <Flex className='items-center justify-center gap-10 '>
            <div className='h-40 w-40 bg-mercury-white-50 z-10 flex relative
             items-center justify-center 
             flex-col p-4 text-center text-pastel-green-800 font-bold
             '>
              <div className='text-5xl absolute top-0'><IoLocationOutline /></div>
              <div className='text-lg'>Our Office</div>
              <div className='text-sm'>45, lorem street, Ipsum State</div>

            </div>

            <div className='h-40 w-40 bg-mercury-white-50 z-10 flex
             items-center justify-center relative
             flex-col p-4 text-center text-pastel-green-800 font-bold
             '>
              <div className='text-5xl absolute top-0'><AiOutlinePhone /></div>
              <div className='text-lg'>Phone</div>
              <div className='text-sm'>+234 123 456 789</div>
            </div>

            <div className='h-40 w-40 bg-mercury-white-50 z-10 flex
             items-center justify-center 
             flex-col p-4 text-center text-pastel-green-800 font-bold
             '>
              <div ><FaFax /></div>
              <div>Fax</div>
              <div>
                <a href='tel:+234 123 456 789' >+234 123 456 789</a>
              </div>
            </div>

            <div className='h-40 w-40 bg-mercury-white-50 z-10 flex
             items-center justify-center 
             flex-col p-4 text-center text-pastel-green-800 font-bold
             '>
              <div><RiMailSendLine /></div>
              <div>Email</div>
              <div>
                <a href='mailto:reportingapp.info' >reportingapp.info</a>
              </div>
            </div>
          </Flex>

          <Flex className='items-center justify-center'>
            <div className='w-96 h-96 bg-pastel-green-200 -mt-10'>
              <H2
                title='Contact Us'
                className='text-pastel-green-800 text-center mt-10'
              />
              <form action="">

              </form>
            </div>
          </Flex>
        </div>

      </Container>

    </SharedLayout>

  )
}

export default Contact