import { Suspense } from 'react'
import { Routes } from './config'
import { Loader } from './component'
import { ScrollToTop } from './component'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "react-placeholder/lib/reactPlaceholder.css";




function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Routes />
        <ToastContainer />
      </Suspense>
    </>
  )
}

export default App
