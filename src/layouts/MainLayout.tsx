import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-black bg-opacity-20 backdrop-filter backdrop-blur-lg ">
      <div className="m-auto w-[90%] p-4 ">
        <Navbar />
        <main className="my-20 space-y-[100px] ">{children}</main>
      </div>
      <div className="bg-gray-800 p-4 ">
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
