import { Suspense } from 'react'
import { Routes } from './config'
import { Loader } from './component'
import { ScrollToTop } from './component'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from './component/Notification'

function App() {


  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Routes />
        <ToastContainer />
        <Notification />
      </Suspense>
    </>
  )
}

export default App
