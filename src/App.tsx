import { Suspense } from 'react'
import { Routes } from './config'
import { Loader } from './component'
import { ScrollToTop } from './component'

function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Routes />
      </Suspense>
    </>
  )
}

export default App
