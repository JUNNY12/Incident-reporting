import { Suspense } from 'react'
import { Routes } from './config'
import { Loader } from './component'

function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </>
  )
}

export default App
