import React from 'react'
import { Button, SharedLayout } from '../../component'
import IncidentReport from './IncidentReport'
import Form from './Form'
import { useState, useEffect } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useWidth } from '../../hooks/useWidth'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router'
import { Profile, Loader } from '../../component'
import { FaUserCircle } from "react-icons/fa"
import { BiDownArrow } from 'react-icons/bi'




const Report = () => {
  const [showForm, setShowForm] = useState(false)
  const width = useWidth()
  const [user, loading] = useAuthState(auth)
  const [authenticated, setAuthenticated] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const navigate = useNavigate()

  const uid = user?.uid;

  useEffect(() => {
    if (!user && !loading) {
      navigate('/');
    }
    setAuthenticated(user ? true : false);
  }, [user, loading, navigate]);


  if (loading) {
    return <Loader />;
  }

  //return null if user is not authenticated to prevent glitch of showing home page
  else if (!authenticated) {
    return null;
  }

  else if (!user) {
    return null
  }

  //function to show form
  const handleShowForm = () => {
    setShowForm(true)
  }

  return (
    <SharedLayout>
      <section className='bg-mercury-white-50 font-myFont min-h-screen p-12 pt-32 relative mobileL:ps-8 mobileL:pe-8 '>

        <div
          onClick={() => setShowProfile(prev => !prev)}
          className='mb-4 absolute right-4 top-[5rem] cursor-pointer'
          title='profile'
          aria-label='profile'>
          <FaUserCircle className='w-12 h-12 text-pastel-green-800' />

          <div className='absolute -bottom-4 left-4'>
            <BiDownArrow className='w-4 h-4 text-pastel-green-800' />
          </div>
        </div>
        {
          showProfile && <Profile setShowProfile={setShowProfile} />
        }

        {
          width > 768 &&
          !showForm &&
          <div className='flex justify-end mt-8'>
            <Button
              title='Report'
              aria-label='Report'
              className='bg-pastel-green-800 w-40 mr-8 font-bold
           text-mercury-white-50 text-2xl pb-3
            hover:bg-pastel-green-600'
              onClick={handleShowForm}
            >Report</Button>
          </div>
        }

        {
          width < 768 && !showForm && (
            <div className='text-pastel-green-800 text-6xl fixed right-4 bottom-10 z-10'>
              <button
                aria-label='Report'
                className='cursor-pointer'
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