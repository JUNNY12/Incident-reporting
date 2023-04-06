import React from 'react'
import {Footer, Nav} from "../component"

interface childrenProps {
    children: React.ReactNode
}

const SharedLayout = ({children}:childrenProps) => {
  return (
    <div>
        <div>
            <Nav />
        </div>
        {children}

        <div>
          <Footer />
        </div>
    </div>
  )
}

export default SharedLayout