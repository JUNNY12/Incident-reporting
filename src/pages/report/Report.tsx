import React from 'react'
import { Button, SharedLayout } from '../../component'
import IncidentReport from './IncidentReport'
import Form from './Form'
import { useState } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import { useWidth } from '../../hooks/useWidth'
const Report = () => {

  const [showForm, setShowForm] = useState(false)
  const width = useWidth()
  

  //function to show form
  const handleShowForm = () => {
    setShowForm(true)
  }

  return (
    <SharedLayout>
      <section className='bg-mercury-white-50 min-h-screen p-12 pt-32 relative mobileL:ps-8 mobileL:pe-8 '>

        {
          width > 768 &&
          !showForm &&
          <div className='flex justify-end'>
            <Button className='bg-pastel-green-800 w-52 font-bold
           text-mercury-white-50 text-2xl pb-3
            hover:bg-pastel-green-600'
              onClick={handleShowForm}
            >Report</Button>
          </div>
        }

        {
          width < 768 && (
            <div className='text-pastel-green-800 text-6xl fixed right-4 bottom-10 z-10'>
              <button
              onClick={handleShowForm}
              ><AiFillPlusCircle /></button>
            </div>
          )
        }

        {
          showForm &&
          <div>
            <Form setShowForm={setShowForm} />
          </div>
        }
        <div className='mt-4'>
          <IncidentReport />
        </div>
        

      </section>
    </SharedLayout>
  )
}

export default Report