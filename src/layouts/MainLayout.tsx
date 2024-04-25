import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-black bg-opacity-20 backdrop-filter backdrop-blur-lg p-4">
      <div className="m-auto w-[90%] ">
        <Navbar />
        <main className="my-20 space-y-[100px] ">{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
