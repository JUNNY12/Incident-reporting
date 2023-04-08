import React from 'react'
import { Button, SharedLayout } from '../../component'
import IncidentReport from './IncidentReport'
import Form from './Form'
import { useState } from 'react'

const Report = () => {

  const [showForm, setShowForm] = useState(false)

  //function to show form
  const handleShowForm = () => {
    setShowForm(true)
  }

  return (
    <SharedLayout>
      <section className='bg-pastel-green-200 h-full
       p-12 pt-24 relative
       mobileL:ps-8 mobileL:pe-8 
       '>

        {
          !showForm &&
          <div className='flex justify-end'>
            <Button className='bg-pastel-green-800 w-60 font-bold
           text-mercury-white-50 hover:bg-mercury-white-50
            hover:text-pastel-green-800'
              onClick={handleShowForm}
            >Report</Button>
          </div>
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